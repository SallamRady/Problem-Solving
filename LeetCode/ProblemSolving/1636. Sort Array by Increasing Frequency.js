/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  let frq = {};
  nums.forEach((n) => {
    if (!(n in frq)) frq[n] = 1;
    else frq[n]++;
  });
  nums = nums.map((ele) => ({ n: ele, frq: frq[ele] }));
  nums.sort((a, b) => {
    if (a.frq == b.frq) return b.n - a.n;
    return a.frq - b.frq;
  });
  nums = nums.map((ele) => ele.n);
  return nums;
};
