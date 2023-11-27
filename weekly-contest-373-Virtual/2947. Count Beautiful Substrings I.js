/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var beautifulSubstrings = function (str, k) {
    let n = str.length, vowels = 0, consonants = 0, answer = 0;
    let VOWELS = 'aeiou';
    let arr = new Array(n + 1).fill(0);

    // prepare prifix sum
    for (let i = 1; i <= n; i++) {
        if (VOWELS.includes(str[i - 1])) arr[i] = 1;
        else arr[i] = 0;
    }
    for (let i = 1; i <= n; i++) {
        arr[i] += arr[i - 1];
    }
    function countVowels(start, end) {
        return arr[end] - arr[start - 1];
    }


    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            vowels = countVowels(i + 1, j + 1); consonants = j - i + 1;
            consonants -= vowels;
            if (consonants == vowels) {
                if (((vowels * consonants) % k) == 0) {
                    answer++;
                }
            }
        }
    }

    return answer;
};