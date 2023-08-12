/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
    let n = nums.length, cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] == nums[j] && (i * j) % k == 0) {
                cnt++;
            }
        }
    }
    return cnt;
};