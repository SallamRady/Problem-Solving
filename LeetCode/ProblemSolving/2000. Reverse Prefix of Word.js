/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let idx = word.indexOf(ch);
  let subStr = word.slice(0, idx + 1);
  let newSubStr = subStr.split("").reverse().join("");
  word = word.replace(subStr, newSubStr);
  return word;
};
