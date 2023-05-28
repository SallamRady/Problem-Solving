/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let answer = "";
  strs.sort((a, b) => b.length - b.length);
  for (let i = 0; i < strs.length; i++) {
    if (i == 0) answer = strs[i];
    else {
      let len = Math.min(answer.length, strs[i].length);
      var temp = "";
      for (let j = 0; j < len; j++) {
        if (strs[i][j] == answer[j]) {
          temp += strs[i][j];
        } else {
          break;
        }
      }
      answer = temp;
    }
  }
  return answer;
};
