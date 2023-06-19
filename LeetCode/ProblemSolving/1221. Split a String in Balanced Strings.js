/**
 * @param {string} s
 * @return {number}
 */
function balancedStringSplit(s) {
  let count = 0;
  let lCount = 0;
  let rCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") {
      lCount++;
    } else {
      rCount++;
    }

    if (lCount === rCount) {
      count++;
      lCount = 0;
      rCount = 0;
    }
  }

  return count;
}
