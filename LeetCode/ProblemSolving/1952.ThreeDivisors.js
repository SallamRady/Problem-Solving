/**
 * @param {number} n
 * @return {boolean}
 */
function hasExactlyThreeDivisors(n) {
    if (n == 1) return false;
    // Check if n is a perfect square
    const sqrt = Math.floor(Math.sqrt(n));
    if (sqrt * sqrt !== n) {
        return false;
    }

    // Check if the square root of n is a prime number
    for (let i = 2; i <= Math.sqrt(sqrt); i++) {
        if (sqrt % i === 0) {
            return false;
        }
    }

    return true;
}
var isThree = function (n) {
    return hasExactlyThreeDivisors(n);
};