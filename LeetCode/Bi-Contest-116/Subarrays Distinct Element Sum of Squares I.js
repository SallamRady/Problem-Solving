/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function (nums) {
    // declaration..
    let n = nums.length, sum = 0, count = 0, frq = {};
    // get all sub arraies
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            count = 0;
            frq = {};
            const subarray = nums.slice(i, j);
            subarray.forEach(n => {
                if (!(n in frq)) {
                    count++;
                    frq[n] = n;
                }
            });
            sum += (count * count);
        }
    }

    return sum;
};