function getNextChar(char) {
    return String.fromCharCode(char.charCodeAt(0) + 1);
}
/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
    let arr = [];
    let cells = s.split(':');
    let num1 = cells[0].split('')[1];
    let c1 = cells[0].split('')[0];
    let num2 = cells[1].split('')[1];
    let c2 = cells[1].split('')[0];

    for (; c1 <= c2;) {
        for (let i = num1; i <= num2; i++) {
            arr.push((c1 + i));
        }
        c1 = getNextChar(c1);
    }
    return arr;
};


cellsInRange("A1:F1");