/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    let n = nums.length, cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((nums[i] + nums[j]) <= upper && (nums[i] + nums[j]) >= lower) cnt++;
        }
    }
    return cnt;
};
