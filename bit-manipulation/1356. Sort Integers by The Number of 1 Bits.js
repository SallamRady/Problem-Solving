/**
 * @param {number[]} arr
 * @return {number[]}
 */
function countBits1(num) {
    let counter = 0;
    while (num) {
        counter++;
        num = num & (num - 1); //remove first 1 from right
    }
    return counter;
}
var sortByBits = function (arr) {
    arr = arr.map(n => {
        return {
            n: n,
            ones: countBits1(n),
        }
    });
    arr.sort((a, b) => {
        if (a.ones == b.ones) return a.n - b.n
        return a.ones - b.ones;
    });
    return arr.map(n => n.n);
};