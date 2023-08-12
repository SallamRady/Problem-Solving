/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
    let n = nums.length, cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((nums[j] - nums[i]) != j - i) cnt++;
        }
    }
    return cnt;
};