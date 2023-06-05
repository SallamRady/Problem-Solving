/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
  const seen = new Set();
  while (n !== 1) {
    if (seen.has(n)) {
      return false;
    }
    seen.add(n);
    n = sumOfSquaresOfDigits(n);
  }
  return true;
}

function sumOfSquaresOfDigits(n) {
  let sum = 0;
  while (n > 0) {
    const digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
}
