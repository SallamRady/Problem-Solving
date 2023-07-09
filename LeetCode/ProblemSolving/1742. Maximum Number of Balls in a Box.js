/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
    let boxies = {}, answer = 0;
    for (let i = lowLimit; i <= highLimit; i++) {
        let digitsSum = String(i).split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
        if (digitsSum in boxies) boxies[digitsSum]++;
        else boxies[digitsSum] = 1;
    }
    for (let key in boxies) {
        answer = Math.max(boxies[key],answer)
    }
    return answer;
};