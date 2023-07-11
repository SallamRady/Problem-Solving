/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const isPrime = (n) => {
  if (n == 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
};

function countBits1(num) {
  let counter = 0;
  while (num) {
    counter++;
    num = num & (num - 1); //remove first 1 from right
  }
  return counter;
}

var countPrimeSetBits = function (left, right) {
  let counter = 0;
  for (; left <= right; left++) {
    if (isPrime(countBits1(left))) counter++;
  }
  return counter;
};
