/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    let n = boxes.length, answer = [], cnt = 0;
    for (let i = n - 1; i >= 0; i--) {
        cnt = 0;
        for (let j = i - 1; j >= 0; j--) {
            if (boxes[j] == '1') {
                cnt += (i - j);
            }
        }
        for (let j = n - 1; j > i; j--) {
            if (boxes[j] == '1') {
                cnt += (j - i);
            }
        }
        answer.push(cnt);
    }
    answer.reverse();
    return answer;
};