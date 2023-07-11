/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
function getBit(num, idx) {
    num = num >> idx;
    return num & 1;
}

function flibBit(num, idx) {
    return num ^ (1 << idx);
}
var minBitFlips = function (start, goal) {
    let idx = 0,counter = 0;
    while (goal != start) {
        if(getBit(goal,idx) != getBit(start,idx)){
            start = flibBit(start,idx);
            counter++;
        }
        idx++;
    }
    return counter;
};