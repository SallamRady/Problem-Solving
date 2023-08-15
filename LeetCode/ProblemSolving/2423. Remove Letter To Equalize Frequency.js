/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
    let frq = {}, n = word.length, cnt = 0;
    for (let i = 0; i < n; i++) {
        if (word[i] in frq) frq[word[i]]++;
        else frq[word[i]] = 1;

        if (frq[word[i]] > 1) {
            cnt++;
            if (cnt > 1)
                break;
        }
    }
    return cnt > 1 ? false : true;
};