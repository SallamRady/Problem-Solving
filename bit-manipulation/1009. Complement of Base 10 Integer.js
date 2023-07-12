/**
 * @param {number} n
 * @return {number}
 */
function countBits(num) {
    let counter = 0;
    while (num) {
        counter++;
        num = num >> 1; //remove first 1 from right
    }
    return counter;
}
var bitwiseComplement = function (num) {
    if (num == 0) return 1;
    let mask = (1 << countBits(num)) - 1;
    return num ^ mask;
};