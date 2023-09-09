/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
    let n = s.length;
    for (let i = n - 1; i > 0; i--) {
        if (s[i] < s[i - 1]) return false;
    }
    return true;
};