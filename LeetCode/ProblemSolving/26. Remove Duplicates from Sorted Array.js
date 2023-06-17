/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let uniques = new Set(nums),i = 0;
    for(let n of uniques){
      nums[i] = n;
      i++;
    }
    return uniques.size;
};