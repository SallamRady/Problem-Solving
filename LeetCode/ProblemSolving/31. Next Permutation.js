/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i < 0) {
    nums.reverse();
    return nums;
  }
  let j = nums.length - 1;
  while (nums[j] <= nums[i]) {
    j--;
  }
  [nums[i], nums[j]] = [nums[j], nums[i]];
  nums.splice(i + 1, nums.length - i - 1, ...nums.slice(i + 1).reverse());
  return nums;
};
