/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function (mountain) {
  // declaration...
  let n = mountain.length,
    answer = [],
    increase = false;

  for (let i = 1; i < n; i++) {
    if (mountain[i - 1] < mountain[i]) increase = true;
    else if (mountain[i - 1] == mountain[i]) increase = false;
    else if (mountain[i - 1] > mountain[i]) {
      // decrease . . here is a peek.
      if (increase) {
        answer.push(i - 1);
        increase = false;
      }
    }
  }
  return answer;
};
