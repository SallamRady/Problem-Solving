/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
  let sCharPlace = {},
    sum = 0;

  for (let i = 0; i < s.length; i++) {
    sCharPlace[s[i]] = i;
  }

  for (let i = 0; i < t.length; i++) {
    sum += Math.abs(sCharPlace[t[i]] - i);
  }

  return sum;
};
