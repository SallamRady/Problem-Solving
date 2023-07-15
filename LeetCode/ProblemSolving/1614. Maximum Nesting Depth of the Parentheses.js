/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (str) {
  let counter = 0,
    answer = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      counter++;
    } else if (str[i] == ")") {
      answer = Math.max(answer, counter);
      counter--;
    }
  }
  return answer;
};


console.log(maxDepth("(1)+((2))+(((3)))"));
console.log(maxDepth("(1+(2*3)+((8)/4))+1"));