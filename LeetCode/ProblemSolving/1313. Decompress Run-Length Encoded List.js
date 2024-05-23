/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let n = nums.length,
    answer = [];

  for (let i = 0; i < n; i += 2) {
    while (nums[i]) {
      answer.push(nums[i + 1]);
      nums[i]--;
    }
  }

  return answer;
};
