/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let frq = {},
    numsCount = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in frq) frq[s[i]]++;
    else frq[s[i]] = 1;
  }
  for (let key in frq) {
    if (frq[key] in numsCount) numsCount[frq[key]] += frq[key];
    else numsCount[frq[key]] = frq[key];
  }
  frq = {};
  for (let i = 0; i < t.length; i++) {
    if (t[i] in frq) frq[t[i]]++;
    else frq[t[i]] = 1;
  }
  for (let key in frq) {
    if (frq[key] in numsCount) {
      numsCount[frq[key]] -= frq[key];
    } else {
      numsCount[frq[key]] = frq[key];
    }
  }
  //console.log('numsCount ', numsCount);
  for (let k in numsCount) {
    if (numsCount[k] != 0) return false;
  }
  return true;
};
