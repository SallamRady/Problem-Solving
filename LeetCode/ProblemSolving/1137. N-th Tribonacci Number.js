/**
 * @param {number} n
 * @return {number}
 */
function recursive(num) {
  if (num == 0) return 0;
  if (num <= 2) return 1;

  return recursive(num - 1) + recursive(num - 2) + recursive(num - 3);
}
var tribonacci = function (n) {
  return recursive(n);
};
