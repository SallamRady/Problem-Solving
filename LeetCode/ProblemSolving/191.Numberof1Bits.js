/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let counter = 0;
  for (let i = 0; i < 32; i++) {
    if (n & 1) counter++;
    n >>>= 1;
  }
  return counter;
};
