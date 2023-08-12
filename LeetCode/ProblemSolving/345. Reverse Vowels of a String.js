/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowelsQueue = [], vowels = "aeoiu";
    for (let i = 0; i < s.length; i++) {
        if (vowels.indexOf(s[i]) != -1) {
            vowelsQueue.push(s[i]);
        }
    }
    let str = "";
    for (let i = 0; i < s.length; i++) {
        if (vowels.indexOf(s[i]) != -1) {
            str += vowelsQueue.pop();
        } else {
            str += s[i];
        }
    }
    return str;
};