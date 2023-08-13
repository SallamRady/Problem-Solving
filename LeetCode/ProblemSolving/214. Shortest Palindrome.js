/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
    let rev = s.split('').reverse().join('');
    for (let i = 0; i < s.length; i++) {
        if (s.substring(0, s.length - i) === rev.substring(i)) {
            return rev.substring(0, i) + s;
        }
    }
    return rev + s;
};