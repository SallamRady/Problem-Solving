/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let counter = 0;
    operations.forEach(opt=>{
        if(opt.includes('++'))counter++;
        else counter--;
    });
    return counter;
};