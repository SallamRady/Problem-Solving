/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  let n = words.length;

  for (let i = 0; i < n; i++) {
    let reverseWord = words[i].split("").reverse().join("");
    if (reverseWord == words[i]) return words[i];
  }
  return "";
};
