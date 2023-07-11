/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let counter = 0;
  allowed = allowed
    .split("")
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join("");
  words = words.map((w) => {
    return Array.from(new Set(w.split("")))
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join("");
  });
  words.forEach((w) => {
    let valid = true;
    for (let i = 0; i < w.length; i++) {
      if (allowed.indexOf(w[i]) == -1) {
        valid = false;
        break;
      }
    }
    if (valid) counter++;
  });
  return counter;
};
