/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let letters = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."],idx = 0,n,str = "",mySet = new Set();
    words.forEach(word=>{
        n = word.length;str = "";
        for(let i = 0;i<n;i++){
            idx = word.charCodeAt(i) - "a".charCodeAt(0);
            str +=letters[idx];
        }
        mySet.add(str);
    });
    return mySet.size
};