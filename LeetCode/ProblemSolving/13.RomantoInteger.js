/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let n = s.length,
    map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    },
    sum = 0,
    prev;
  for (let i = 0; i < n; i++) {
    if (i < n - 1) {
      if (map[s[i]] < map[s[i + 1]]) {
        sum += map[s[i + 1]] - map[s[i]];
        i++;
      } else {
        sum += map[s[i]];
      }
    } else sum += map[s[i]];
  }
  return sum;
};
