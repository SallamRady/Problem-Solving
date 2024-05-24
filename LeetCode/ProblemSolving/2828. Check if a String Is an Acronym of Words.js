/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  let str = words.map((ele) => ele[0]).join("");
  return str == s;
};
