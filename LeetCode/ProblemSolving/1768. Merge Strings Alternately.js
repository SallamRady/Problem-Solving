/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i = 0,j = 0,answer = "";
    while(i < word1.length && j < word2.length){
        answer +=word1[i];
        answer +=word2[j];
        i++;j++;
    }
    while(i < word1.length){
        answer +=word1[i];
        i++;
    }
    while(j < word2.length){
        answer +=word2[j];
        j++;
    }
    return answer;
};