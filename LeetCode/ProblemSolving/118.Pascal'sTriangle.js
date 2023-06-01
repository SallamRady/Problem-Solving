/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (n) {
  let arr = new Array(n).map((e) => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n).fill(0);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (i == 0 || j == 0 || j == i) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
      }
    }
  }
  arr = arr.map((ar) => ar.filter((e) => e != 0));
  return arr;
};
