/**
 * @param {number} columnNumber
 * @return {string}
 */
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (n) {
  let result = "";
  while (n > 0) {
    let remainder = (n - 1) % 26;
    result += String.fromCharCode(remainder + 65);
    n = Math.floor((n - 1) / 26);
  }
  return result.split("").reverse().join("");
};
