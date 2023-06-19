/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let mx = 0;
    sentences.forEach(str=>{
        mx = Math.max(str.split(' ').length,mx);
    });
    return mx;
};