/**
 * @param {number} n
 * @return {boolean}
 */
function log4(n) {
    return Math.log(n) / Math.log(4);
}
var isPowerOfFour = function (n) {
    let result = log4(n);
    if(parseInt(result) - result == 0)return true;
    return false;
};