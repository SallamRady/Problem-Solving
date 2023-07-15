/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  let digits = n
      .toString()
      .split("")
      .map((e) => parseInt(e)),
    sum = 0;
  for (let i = 0; i < digits.length; i++) {
    if (i % 2 == 0) sum += digits[i];
    else sum -= digits[i];
  }
  return sum;
};
