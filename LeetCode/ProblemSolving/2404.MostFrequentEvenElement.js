/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  let answer = -1,
    mx = -1,
    frq = {};
  nums.forEach((n) => {
    if (n % 2 == 0) {
      if (n in frq) {
        frq[n]++;
      } else {
        frq[n] = 1;
      }
      if (frq[n] > mx) {
        mx = frq[n];
        answer = n;
      } else if (frq[n] == mx) {
        if (n < answer) {
          answer = n;
        }
      }
    }
  });
  return answer;
};
