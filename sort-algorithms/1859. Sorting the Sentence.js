/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    let lastChar, word;
    let str = s.split(' ').map(ele => {
        lastChar = ele[ele.length - 1];
        word = ele.substring(0, ele.length - 1);
        return { word, order: parseInt(lastChar) };
    }).sort((a, b) => a.order - b.order).map(ele => ele.word).join(' ');
    return str;
};