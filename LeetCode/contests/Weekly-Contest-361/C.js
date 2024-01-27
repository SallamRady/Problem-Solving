/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function (nums, modulo, k) {
    let n = nums.length, arr = [], cnt = 0, answer = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            cnt = 0;
            arr = nums.slice(i, j + 1);
            if (arr.length > 1) {
                for (let l = 0; l < arr.length; l++) {
                    if (nums[l] % modulo == k) cnt++;
                }
            }
            if (cnt % modulo == k) answer++;
        }
    }
    return answer;
};

countInterestingSubarrays([3, 2, 4], 3, 3)