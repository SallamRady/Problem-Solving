/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  s = s
    .split("")
    .filter((c) => (c >= "a" && c <= "z") || (c >= "0" && c <= "9"))
    .join("");
  let len = s.length;
  console.log(s);
  for (let i = 0, j = len - 1; i < len; i++, j--) {
    if (s[i] != s[j]) return false;
  }
  return true;
};
