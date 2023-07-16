/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let frq = {},
    n = s.length;
  for (let i = 0; i < n; i++) {
    if (!(s[i] in frq)) frq[s[i]] = 1;
    else frq[s[i]]++;
  }
  for (let i = 0; i < n; i++) {
    if (frq[s[i]] == 1) return i;
  }
  return -1;
};
