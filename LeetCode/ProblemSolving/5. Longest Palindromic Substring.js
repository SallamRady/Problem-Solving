/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let n = s.length, str = "", cnt = 0, answer = "";
    for (let i = 0; i < n; i++) {
        let mianPosition = i; cnt = 0, end = null, str = "";
        // branch 1
        for (let l = mianPosition, r = mianPosition + 1; r < n && l >= 0; l--, r++) {
            if (s[l] == s[r]) {
                str = s[l] + str + s[r];
            } else break;
        }
        if (str.length > answer.length) {
            answer = str;
        }
        // console.log('round ',i,' -> ',str);
        //branch 2
        cnt = 1;
        mianPosition = i;
        str = "";
        str += s[i];
        for (let l = mianPosition - 1, r = mianPosition + 1; r < n && l >= 0; l--, r++) {
            if (s[l] == s[r]) {
                str = s[l] + str + s[r];
            } else break;
        }
        if (str.length > answer.length) {
            answer = str;
        }
        // console.log('round ',i,' -> ',str);
    }

    return answer;
};