/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let n = arr.length,
    sub = [],
    sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = i; k <= j; k++) {
        sub.push(arr[k]);
      }
      if (sub.length % 2 != 0) {
        sum += sub.reduce((a, b) => a + b);
      }
      sub = [];
    }
  }
  return sum;
};
