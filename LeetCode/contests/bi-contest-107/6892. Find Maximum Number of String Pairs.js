/**
 * @param {string[]} words
 * @return {number}
 */
let reverseString = (str) => {
  return [...str].reverse().join("");
};
var maximumNumberOfStringPairs = function (words) {
  let n = words.length,
    counter = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let rw = reverseString(words[j]);
      if (rw == words[i]) counter++;
    }
  }
  return counter;
};
