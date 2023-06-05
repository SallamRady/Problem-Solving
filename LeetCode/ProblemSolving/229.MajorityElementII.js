/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let frq = {},
    answer = new Set();
  nums.forEach((n) => {
    if (n in frq) frq[n]++;
    else frq[n] = 1;

    if (frq[n] > parseInt(nums.length / 3)) {
      answer.add(n);
    }
  });
  return [...answer];
};
