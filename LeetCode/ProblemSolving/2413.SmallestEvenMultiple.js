/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  let answer = n;
  while (n % 2 != 0) {
    n *= 2;
    answer = n;
  }
  return answer;
};
