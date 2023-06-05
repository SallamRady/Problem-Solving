/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let frq = {},
    mx = 0,
    answer;
  nums.forEach((n) => {
    if (n in frq) frq[n]++;
    else frq[n] = 1;

    if (frq[n] > mx) {
      mx = frq[n];
      answer = n;
    }
  });
  return answer;
};
