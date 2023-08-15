/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    let frq = {}, n = sentence.length;
    for (let i = 0; i < n; i++) {
        if (!(sentence[i] in frq)) frq[sentence[i]] = true;
    }

    for (let letter = 'a'; letter <= 'z'; letter = String.fromCharCode(letter.charCodeAt(0) + 1)) {
        if (!(letter in frq)) return false;
    }
    return true;
};