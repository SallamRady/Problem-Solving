/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let counter = 0,
    answer = 0,
    vowels = "aeiou";
  for (let i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) != -1) {
      counter++;
    }

    if (i >= k && vowels.indexOf(s[i - k]) != -1) {
      counter--;
    }
    if (i >= k - 1) {
      answer = Math.max(answer, counter);
    }
  }
  return answer;
};
