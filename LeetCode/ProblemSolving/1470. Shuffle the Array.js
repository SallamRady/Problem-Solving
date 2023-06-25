/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let i=0,j=n,arr = [];
    while(i < n && j < 2*n){
       arr.push(nums[i]);
       arr.push(nums[j]);
       i++;j++;
    }
    return arr;
 };