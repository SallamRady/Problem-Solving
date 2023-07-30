/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function recursive(nums, k, temp, i = 0) {
  if (nums.length == 1) return nums[0];
  temp--;
  if (temp == 0) {
    nums.splice(i, 1);
    temp = k;
  } else {
    i++;
  }
  i %= nums.length;
  //console.log('nums :',nums)
  return recursive(nums, k, temp, i);
}
var findTheWinner = function (n, k) {
  let nums = Array.from({ length: n }, (_, index) => index + 1);
  return recursive(nums, k, k);
};
