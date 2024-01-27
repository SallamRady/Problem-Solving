/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function digitsSum(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += (num.charCodeAt(i) - 48);
    }
    return sum;
}
function isSymantic(str) {
    let _len = str.length;
    let left = str.substring(0, _len / 2);
    let right = str.substring(_len / 2);
    if (left.length != right.length) return false;
    let leftSum = digitsSum(left);
    let rightSum = digitsSum(right);
    return leftSum == rightSum;
}
var countSymmetricIntegers = function (low, high) {
    let counter = 0;
    for (let i = low; i <= high; i++) {
        let str = String(i);
        if (str.length % 2 == 0) {
            if (isSymantic(String(i))) counter++;
        }
    }
    return counter;
};

console.log("Counter : ",countSymmetricIntegers(10, 200));