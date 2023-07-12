/**
 * @param {number} n
 * @return {number}
 */

var binaryGap = function (num) {
  let idx = 0,
    answer = 0,
    position1 = null;
  while (num) {
    if ((num & 1) == 1) {
      if (position1 != null) {
        answer = Math.max(answer, idx - position1);
      }
      position1 = idx;
    }
    idx++;
    num = num >> 1;
  }
  return answer;
};
