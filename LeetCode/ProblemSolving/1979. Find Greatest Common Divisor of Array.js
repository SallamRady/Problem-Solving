/**
 * @param {number[]} nums
 * @return {number}
 */
function GCD(a, b) {
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}
var findGCD = function (nums) {
  let mn = Math.min(...nums);
  let mx = Math.max(...nums);
  return GCD(mn, mx);
};
