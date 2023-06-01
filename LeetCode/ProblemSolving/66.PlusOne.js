/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let len = digits.length,
    i;
  for (i = len - 1; i >= 0; i--) {
    if (digits[i] != 9) {
      digits[i]++;
      break;
    } else {
      digits[i] = 0;
    }
  }
  if (i == -1) digits.unshift(1);
  return digits;
};
