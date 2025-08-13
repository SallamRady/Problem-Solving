// 88. Merge Sorted Array
/*
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // remove trailing zeros from nums1
    nums1.splice(m);
    // merge nums1 and nums2
    nums1.push(...nums2);
    // sort nums1
    return nums1.sort((a, b) => a - b);
};

// test cases
console.log('test case 1',merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log('test case 2',merge([1], 1, [], 0));
console.log('test case 3',merge([0], 0, [1], 1));
