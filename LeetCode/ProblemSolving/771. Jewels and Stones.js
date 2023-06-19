/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let frq = {},sum = 0;
    for(let i=0;i<stones.length;i++){
        if(jewels.indexOf(stones[i]) != -1){
            if(stones[i] in frq)frq[stones[i]]++;
            else frq[stones[i]] = 1;
        }
    };
    for(let n in frq)sum += frq[n];
    return sum;
};