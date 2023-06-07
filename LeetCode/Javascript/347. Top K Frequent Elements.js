/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let frq = {},
    unique = new Set();
  nums.forEach((n) => {
    if (n in frq) frq[n]++;
    else frq[n] = 1;
    unique.add(n);
  });
  let arr = [];
  for (let num of unique) {
    arr.push({ num, frq: frq[num] });
  }
  arr.sort((a, b) => b.frq - a.frq);
  nums = [];
  for (let i = 0; i < k; i++) {
    nums.push(arr[i].num);
  }
  return nums;
};
