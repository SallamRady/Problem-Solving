/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let frq = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in frq) frq[s[i]]++;
    else frq[s[i]] = 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] in frq) frq[t[i]]--;
    else frq[t[i]] = 1;
  }

  for (let k in frq) {
    if (frq[k] != 0) return false;
  }
  return true;
};
