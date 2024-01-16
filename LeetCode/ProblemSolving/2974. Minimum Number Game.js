/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  // declaration..
  let n = nums.length;
  // sort nums
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i += 2) {
    [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
  }
  return nums;
};
