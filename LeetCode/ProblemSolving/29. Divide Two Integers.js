/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let positiveLimit = parseInt(Math.pow(2, 31) - 1);
  let negativeLimit = parseInt(Math.pow(-2, 31));
  let result = parseInt(dividend / divisor);
  if (result > 0 && result > positiveLimit) result = positiveLimit;
  else if (result < 0 && result < negativeLimit) result = negativeLimit;
  return result;
};
