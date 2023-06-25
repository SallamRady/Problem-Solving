/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const mx = Math.max(...candies),answer = [];
    candies.forEach(c=>{
        if((c+extraCandies) >= mx)answer.push(true);
        else answer.push(false);
    });
    return answer;
};