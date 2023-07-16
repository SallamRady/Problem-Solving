/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  let mx = Math.max(...nums);
  mx--;
  let start = parseInt((mx * (mx + 1)) / 2);
  mx += k;
  let end = parseInt((mx * (mx + 1)) / 2);

  return end - start;
};
