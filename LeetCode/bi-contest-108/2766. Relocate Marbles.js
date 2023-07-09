/**
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
var relocateMarbles = function (nums, moveFrom, moveTo) {
  nums = [...new Set(nums)];
  let frq = {};
  nums.forEach((n) => {
    if (!(n in frq)) {
      frq[n] = 1;
    }
  });
  for (let i = 0; i < moveFrom.length; i++) {
    nums[nums.indexOf(moveFrom[i])] = moveTo[i];
    frq[moveFrom[i]] = 0;
    frq[moveTo[i]] = 1;
  }
  nums = nums.filter((n) => {
    if (frq[n] == 1) return true;
    return false;
  });
  nums = [...new Set(nums)];
  return nums.sort((a, b) => a - b);
};
