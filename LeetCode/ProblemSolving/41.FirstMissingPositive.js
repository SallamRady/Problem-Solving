/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let number = 1;
    nums.sort((a,b)=>a-b);
    nums.forEach(n=>{
        if(n == number)
            number++;
    });
    return number;
};