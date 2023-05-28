/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = x.toString(),
    n = str.length;
  for (let i = 0, j = n - 1; i < n; i++, j--) {
    if (str[i] != str[j]) return false;
  }
  return true;
};
