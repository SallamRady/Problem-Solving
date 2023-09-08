/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
    let result = [], n = nums.length;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        if (nums[i] == target) result.push(i);
    }
    return result;
};