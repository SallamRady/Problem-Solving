/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  let num = parseInt(Math.log2(n));
  return Math.log2(n) - num == 0;
};
