/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
    let n = nums.length,
      sum = 0;
    for (let i = 0; i < n; i++) {
      if (countBits1(i) == k) {
        sum += nums[i];
      }
    }
    return sum;
  };
  function countBits1(num) {
    let counter = 0;
    while (num) {
      counter++;
      num = num & (num - 1); //remove first 1 from right
    }
    return counter;
  }
  