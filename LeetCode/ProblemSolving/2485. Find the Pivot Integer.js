/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    let s = new Array(n+1).fill(0);
    for (let i = 1; i <= n; i++) {
        s[i] = i;
    }
    for (let i = 1; i <= n; i++) {
        s[i] += s[i - 1];
    }
    for (let i = 1; i <= n; i++) {
        if((s[i-1] + i) == (s[n]-s[i-1]))return i;
    }
    return -1;
};