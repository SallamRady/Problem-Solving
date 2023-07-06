/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let tracer = [], counter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            if (counter > 0) {
                tracer.push(counter);
            }
            counter = 0;
            continue;
        }
        counter++;
    }
    if (counter > 0) {
        tracer.push(counter);
    }
    counter = 0;
    for (let i = 0; i < tracer.length - 1; i++) {
        counter = Math.max(counter, tracer[i] + tracer[i + 1]);
    }
    console.log(tracer);
    return counter == 0?tracer[0]-1:counter;
};