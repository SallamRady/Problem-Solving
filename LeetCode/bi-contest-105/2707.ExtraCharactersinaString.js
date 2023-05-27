/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
  const dic = new Set(dictionary);
  s = "#" + s;
  const n = s.length;
  const dp = new Array(n);
  dp[0] = 0; // When string empty, sure 0 extra char irrespective of dic
  for (let i = 1; i < n; i++) {
    dp[i] = 1 + dp[i - 1]; // If this char is extra
    for (let left = i; left >= 1; left--) {
      // Index of first char in right slicing
      const substring = s.slice(left, i + 1);
      if (dic.has(substring)) dp[i] = Math.min(dp[i], dp[left - 1]);
    }
  }
  return dp[n - 1];
};
// var minExtraChar = function (s, dictionary) {
//   let originalS = s,
//     answer = 10000000,
//     n = dictionary.length;

//   for (let i = 0; i < n; i++) {
//     let j = i,
//       temp = n;
//     while (temp--) {
//       j %= n;
//       let word = dictionary[j];
//       let idx = s.indexOf(word);
//       if (idx >= 0) {
//         s = s.slice(0, idx) + s.slice(idx + word.length);
//       }
//       j++;
//     }
//     answer = Math.min(answer, s.length);
//     console.log("test ", i, ":", answer, s.length, s);
//     s = originalS;
//   }
//   return answer;
// };
