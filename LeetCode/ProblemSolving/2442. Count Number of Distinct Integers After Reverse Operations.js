/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
  let len = nums.length,
    reverse = 0,
    num,
    mySet = new Set();
  for (let i = 0; i < len; i++) {
    num = nums[i];
    mySet.add(num);
    reverse = 0;

    while (num) {
      let digit = parseInt(num % 10);
      reverse = reverse * 10 + digit;
      num = parseInt(num / 10);
    }
    mySet.add(reverse);
  }
  return mySet.size;
};
