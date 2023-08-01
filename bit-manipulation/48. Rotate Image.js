/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let n = matrix[0].length,
    arr = [];
  for (let i = 0; i < n; i++) {
    let ar = [];
    for (let j = n - 1; j >= 0; j--) {
      ar.push(matrix[j][i]);
    }
    arr.push(ar);
  }
  for (let i = 0; i < n; i++) {
    let ar = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = arr[i][j];
    }
  }
  // return arr;
};
