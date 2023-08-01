/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let res = Math.sqrt(num);
  return res == parseInt(res);
};
