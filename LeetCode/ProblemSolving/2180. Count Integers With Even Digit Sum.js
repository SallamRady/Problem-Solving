/**
 * @param {number} num
 * @return {number}
 */
const digitSum = (num) => {
  let sum = 0;
  while (num > 0) {
    sum += parseInt(num % 10);
    num = parseInt(num / 10);
  }
  return sum;
};
var countEven = function (num) {
  let result = 0;
  for (let i = 2; i <= num; i++) {
    let dS = digitSum(i);
    if (dS % 2 == 0) result++;
  }
  return result;
};
