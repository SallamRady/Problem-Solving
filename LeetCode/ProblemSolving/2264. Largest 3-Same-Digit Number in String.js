/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let n = num.length;
    let max = -1;
    for(let i=0;i<n-2;i++){
        if(num[i] == num[i+1] && num[i] == num[i+2]){
            max = Math.max(max,Number(num[i]));
        }
    }
    return max == -1 ? "" : String(max).repeat(3);
};

// test cases
console.log(largestGoodInteger("6777"));
console.log(largestGoodInteger("2300010001"));
console.log(largestGoodInteger("42352335"));
