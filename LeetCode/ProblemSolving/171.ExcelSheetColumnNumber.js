/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (str) {
  let len = str.length,
    result = 0;
  for (let i = 0; i < len; i++) {
    result += (str.charCodeAt(i) - 64) * Math.pow(26, len - (i + 1));
  }
  return result;
};
