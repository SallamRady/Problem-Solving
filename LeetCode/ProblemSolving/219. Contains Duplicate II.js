/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // declare helper variables
    let numMap = new Map();
    // loop through the array
    for (let i = 0; i < nums.length; i++) {
        if (numMap.has(nums[i])) {
            if (i - numMap.get(nums[i]) <= k) {
                return true;
            }
        }
        numMap.set(nums[i], i);
    }
    return false;
};

// test cases
console.log(containsNearbyDuplicate([1,2,3,1], 3)); // true
console.log(containsNearbyDuplicate([1,0,1,1], 1)); // true
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)); // false