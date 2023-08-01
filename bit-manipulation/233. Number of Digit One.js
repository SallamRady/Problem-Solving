/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  let count = 0;
  let i = 1;
  while (i <= n) {
    const divisor = i * 10;
    const q = Math.floor(n / divisor);
    const r = n % divisor;
    count += q * i;
    if (r >= i) {
      count += Math.min(r - i + 1, i);
    }
    i = divisor;
  }
  return count;
};
