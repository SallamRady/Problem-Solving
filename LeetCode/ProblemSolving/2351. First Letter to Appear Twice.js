/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  let frq = {},
    n = s.length;
  for (let i = 0; i < n; i++) {
    if (!(s[i] in frq)) frq[s[i]] = 1;
    else frq[s[i]]++;
    if (frq[s[i]] == 2) return s[i];
  }
  return -1;
};
