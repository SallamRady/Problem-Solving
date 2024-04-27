var numberOfRightTriangles = function (grid) {
  //declare out variables
  let result = 0,
    n = grid.length,
    m = grid[0].length;

  let onesInRow = Array.from({ length: n }, () => 0),
    onesInCols = Array.from({ length: m }, () => 0);

  // calc nums of ones in rows
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1) {
        onesInRow[i]++;
        onesInCols[j]++;
      }
    }
  }

  //calc result
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1) {
        result += (onesInRow[i] - 1) * (onesInCols[j] - 1);
      }
    }
  }

  return result;
};

// 1
// let grid = [
//   [0, 0],
//   [0, 1],
//   [1, 1],
// ];

//2
// let grid = [
//   [0, 1, 0],
//   [0, 1, 1],
//   [0, 1, 0],
// ];

//0
// let grid = [[1,0,0,0],[0,1,0,1],[1,0,0,0]]

//2
// let grid = [[1,0,1],[1,0,0],[1,0,0]]

//6
let grid = [
  [1, 1, 1],
  [1, 0, 1],
];

console.log(numberOfRightTriangles(grid));
