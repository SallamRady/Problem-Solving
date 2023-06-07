/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let len = s.length,
    mySet = new Set(),
    answer = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (mySet.has(s[j])) break;
      mySet.add(s[j]);
    }
    answer = Math.max(answer, mySet.size);
    mySet = new Set([]);
  }
  return answer;
};
