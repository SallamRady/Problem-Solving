/**
 * @param {number} n
 * @return {number}
 */
let minimze = [];
var climbStairs = function (n) {
  if (n <= 2) return n;
  else if (minimze[n] != undefined) return minimze[n];

  minimze[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return minimze[n];
};
