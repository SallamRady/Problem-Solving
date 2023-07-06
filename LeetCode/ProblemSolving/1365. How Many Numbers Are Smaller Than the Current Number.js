/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let arr = nums.map((e) => e);
  arr = arr.sort((a, b) => a - b);
  nums = nums.map((e) => {
    return arr.indexOf(e);
  });
  return nums;
};
