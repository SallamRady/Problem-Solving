/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function (s) {
    const n = s.length;
    let answer = 0;

    for (let i = 1; i < n; i += 2) {
        if (s[i] != s[i - 1]) {
            answer++;
        }
    }

    return answer;

};