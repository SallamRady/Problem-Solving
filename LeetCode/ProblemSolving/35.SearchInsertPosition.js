/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function binarySearch(arr, val) {
  let l = 0,
      r = arr.length - 1,
      mid, idx;

  while (l <= r) {
      mid = Math.floor((l + r) / 2);
      if (arr[mid] == val) return mid;

      if (val < arr[mid]) {
          r = mid - 1;
      }
      else { 
          l = mid + 1; 
          idx = mid; 
      }
  }
  return idx+1;
}
var searchInsert = function (nums, target) {
  let result =  binarySearch(nums, target);
  return isNaN(result)?0:result;
};