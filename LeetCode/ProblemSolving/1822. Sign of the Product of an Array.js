/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let nagative = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) return 0;
    if (nums[i] < 0) nagative++;
  }
  return nagative & 1 ? -1 : 1;
};
