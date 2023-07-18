/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zeros = 0;
  for (let i = 0; i < nums.length; ) {
    if (nums[i] == 0) {
      nums.splice(i, 1);
      zeros++;
    } else i++;
  }
  while (zeros--) {
    nums.push(0);
  }

  return nums;
};
