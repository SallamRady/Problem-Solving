/**
 * @param {string} num
 * @return {number}
 */
let isDivisibleBy25 = (num) => {
    num = parseInt(num);
    return num % 25 === 0;
}
var minimumOperations = function (num) {
    // if (isDivisibleBy25(num)) return 0;
    let len = num.length, answer = 10000, possiableSolution = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            let newNumber = num.substring(0, i) + num.substring(i + 1, j) + num.substring(j + 1);
            // console.log(num, newNumber);
            if (isDivisibleBy25(newNumber)) {
                possiableSolution = len - newNumber.length;
                answer = Math.min(possiableSolution, answer);
            }
            console.log(num, newNumber,answer,possiableSolution,isDivisibleBy25(newNumber))
        }
    }
    return answer;
};

console.log(minimumOperations("2908305"));
// console.log(minimumOperations("2245047"));