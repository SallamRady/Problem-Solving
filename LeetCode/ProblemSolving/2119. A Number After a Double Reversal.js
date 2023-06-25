/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
  let reverse1 = 0,
    originalnum = num;
  while (num) {
    let digit = parseInt(num % 10);
    reverse1 = reverse1 * 10 + digit;
    num = parseInt(num / 10);
  }
  num = 0;
  while (reverse1) {
    let digit = parseInt(reverse1 % 10);
    num = num * 10 + digit;
    reverse1 = parseInt(reverse1 / 10);
  }
  return num == originalnum;
};
