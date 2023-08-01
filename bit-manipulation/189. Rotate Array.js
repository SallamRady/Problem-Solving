/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    nums[i] = { idx: (i + k) % n, val: nums[i] };
  }
  nums.sort((a, b) => a.idx - b.idx);
  for (let i = 0; i < n; i++) {
    nums[i] = nums[i].val;
  }
  return nums;
};
