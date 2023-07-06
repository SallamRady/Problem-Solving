/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  let leftSum = new Array(nums.length + 1);
  let rightSum = new Array(nums.length + 1).fill(0);
  leftSum[0] = 0;
  for (let i = 0; i < nums.length; i++) {
    leftSum[i + 1] = leftSum[i] + nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    rightSum[i] = rightSum[i + 1] + nums[i];
  }
  leftSum.pop();
  rightSum.shift();
  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.abs(rightSum[i] - leftSum[i]);
  }
  return nums;
};
