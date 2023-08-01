/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    let left = 0;
    let right = parseInt(Math.sqrt(c));
    while (left <= right) {
        if (c == ((left ** 2 + right ** 2)))
            return true;
        if (((left ** 2 + right ** 2)) > c)
            right--;
        else
            left++;
    }
    return false;
};