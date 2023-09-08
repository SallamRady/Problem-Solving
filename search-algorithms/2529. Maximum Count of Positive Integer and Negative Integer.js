/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let pos = 0, neg = 0, n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) pos++;
        else if (nums[i] < 0) neg++;
    }
    return Math.max(pos, neg);
};