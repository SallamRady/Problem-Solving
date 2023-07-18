/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (str, indices) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push({ c: str[i], i: indices[i] });
  }
  let answer = arr
    .sort((a, b) => a.i - b.i)
    .map((e) => e.c)
    .join("");
  return answer;
};
