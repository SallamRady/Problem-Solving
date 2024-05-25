/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function (nums) {
    let temp = [],
      frq = {},
      ans = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] in frq) {
        temp.push(nums[i]);
      } else {
        frq[nums[i]] = 1;
      }
    }
  
    ans = temp.length > 0 ? temp[0] : 0;
    for (let i = 1; i < temp.length; i++) {
      ans ^= temp[i];
    }
  
    return ans;
  };
  