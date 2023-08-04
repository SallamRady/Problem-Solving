/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let stack = [-1],
    answer = 0;
  let n = s.length;
  for (let i = 0; i < n; i++) {
    if (s[i] == "(") stack.push(i);
    else {
      stack.pop();
      if (stack.length == 0) {
        stack.push(i);
      } else {
        answer = Math.max(answer, i - stack[stack.length - 1]);
      }
    }
  }
  return answer;
};
