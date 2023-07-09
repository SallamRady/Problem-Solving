/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
    let arr = [], answer = [];
    for (let i = 0; i < rows; i++) {
        let temp = [];
        for (let j = 0; j < cols; j++) {
            temp.push([Math.abs(rCenter - i), Math.abs(cCenter - j)]);
        }
        arr.push(temp)
    }

    for (let j = 0;j < cols; j++) {
        for (let i = 0; i < rows; i++) {
            answer.push(arr[i][j])
        }
    }

    return answer;
};