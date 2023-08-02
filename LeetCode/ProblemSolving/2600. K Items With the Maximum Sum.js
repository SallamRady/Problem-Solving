
/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    if(k <= (numOnes+numZeros)){
        return parseInt(Math.min(numOnes,k));
    }
    let sum = 0;
    sum += numOnes;
    k -= (numOnes+numZeros);
    sum += (k*-1);
    return sum;
};