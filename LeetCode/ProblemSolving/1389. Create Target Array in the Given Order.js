/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let target = [],
    idx = 0;
  index.forEach((i) => {
    target.splice(i, 0, nums[idx]);
    idx++;
  });
  return target;
};
