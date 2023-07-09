/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
    let digits = [];
    while (n > 0) {
        digits.push(n % k);
        n = Math.floor(n / k);
    }
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += digits[i];
    }
    return sum;
};