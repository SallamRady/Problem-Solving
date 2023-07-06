/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let s = new Array(gain.length + 1).fill(0);
    for (let i = 0; i < gain.length; i++) {
        s[i + 1] = s[i] + gain[i];
    }
    return Math.max(...s)
};