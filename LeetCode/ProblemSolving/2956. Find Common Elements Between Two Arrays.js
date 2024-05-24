/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  let n = nums1.length,
    m = nums2.length;
  let count1 = 0,
    count2 = 0;
  for (let i = 0; i < n; i++) if (nums2.indexOf(nums1[i]) != -1) count1++;

  for (let i = 0; i < m; i++) if (nums1.indexOf(nums2[i]) != -1) count2++;

  return [count1, count2];
};
