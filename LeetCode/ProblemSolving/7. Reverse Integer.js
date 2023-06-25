/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (num) {
  let reverse1 = 0,
    l = parseInt(Math.pow(-2, 31)),
    r = parseInt(Math.pow(2, 31));
  while (num) {
    let digit = parseInt(num % 10);
    reverse1 = reverse1 * 10 + digit;
    num = parseInt(num / 10);
  }

  return reverse1 >= l && reverse1 <= r ? reverse1 : 0;
};
