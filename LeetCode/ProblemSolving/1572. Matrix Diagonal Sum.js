/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (arr) {
  let n = arr.length,
    m = arr[0].length,
    sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i == j || i + j == n - 1) {
        sum += arr[i][j];
      }
    }
  }
  return sum;
};
