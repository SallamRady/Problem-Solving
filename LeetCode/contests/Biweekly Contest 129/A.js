/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function (grid) {
  let wCount = 0,
    bCount = 0;
  // start check
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      wCount = 0;
      bCount = 0;

      if ("W" == grid[i][j]) wCount++;
      else bCount++;
      if ("W" == grid[i][j + 1]) wCount++;
      else bCount++;
      if ("W" == grid[i + 1][j]) wCount++;
      else bCount++;
      if ("W" == grid[i + 1][j + 1]) wCount++;
      else bCount++;

      if (bCount >= 3 || wCount >= 3) return true;
    }
  }
  return false;
};

let grid = [
  ["B", "W", "B"],
  ["B", "W", "W"],
  ["B", "W", "W"],
];

console.log(canMakeSquare(grid));
