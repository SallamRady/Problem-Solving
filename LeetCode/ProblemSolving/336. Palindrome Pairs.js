/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let rev = s.split('').reverse().join('');
    return rev == s;
};

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
    let n = words.length,arr = [];
    for (let i = 0; i < n; i++) {
        for(let j = 0;j < n;j++){
            if(i == j)continue;
            if(isPalindrome(words[i]+words[j])){
                arr.push([i,j]);
            }
        }
    }
    return arr;
};
