/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let s = new Set();
  nums.forEach((n) => {
    if (!s.has(n)) s.add(n);
    else s.delete(n);
  });
  return s.values().next().value;
};
