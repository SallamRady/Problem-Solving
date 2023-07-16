/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let frq = {},
    n = s.length,
    res = "";
  for (let i = 0; i < n; i++) {
    if (!(s[i] in frq)) frq[s[i]] = 1;
    else frq[s[i]]++;
  }
  let arr = Object.entries(frq).map(([k, v]) => ({ c: k, frq: v }));
  arr.sort((a, b) => b.frq - a.frq);
  arr.forEach((ele) => {
    while (ele.frq) {
      res += ele.c;
      ele.frq--;
    }
  });
  return res;
};
