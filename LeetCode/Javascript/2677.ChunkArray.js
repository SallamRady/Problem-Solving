/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  let i = 0,
    e = i + size,
    answer = [];
  while (i < arr.length) {
    answer.push(arr.slice(i, e));
    i = e;
    e = i + size;
  }

  return answer;
};
