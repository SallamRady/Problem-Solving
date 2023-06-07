/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let frq = {},
    n = nums.length,
    count = 0;
  nums.forEach((n) => {
    if (n in frq) frq[n]++;
    else frq[n] = 1;
  });

  for (let k in frq) {
    if (frq[k] == 1) count++;
  }

  return !(count == n);
};
