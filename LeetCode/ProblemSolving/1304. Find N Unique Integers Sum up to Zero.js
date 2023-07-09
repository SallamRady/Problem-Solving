/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let arr = [],i = 1;
    let len = parseInt(n/2);
    while(len){
        arr.push(i);
        arr.push(i*-1);
        i++;
        len--;
    }
    if(n%2 != 0)arr.push(0);
    return arr;
};