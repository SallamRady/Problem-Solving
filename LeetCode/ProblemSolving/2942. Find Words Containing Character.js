/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let n = words.length,
      arr = [];
    for (let i = 0; i < n; i++) {
      if (words[i].includes(x)) arr.push(i);
    }
    return arr;
  };
  