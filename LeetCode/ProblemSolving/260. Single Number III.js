/**
 * @param {number[]} nums
 * @return {number[]}
 */
function getKeyOfMinValue(obj) {
  return Object.entries(obj).reduce(
    (min, [key, value]) => (value < min[1] ? [key, value] : min),
    [null, Infinity]
  )[0];
}
var singleNumber = function (nums) {
  let frq = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in frq) frq[nums[i]]++;
    else frq[nums[i]] = 1;
  }
  let mn1 = getKeyOfMinValue(frq);
  delete frq[mn1];
  let mn2 = getKeyOfMinValue(frq);

  return [mn1, mn2];
};
