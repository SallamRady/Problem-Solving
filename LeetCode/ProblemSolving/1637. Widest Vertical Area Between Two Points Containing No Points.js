/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  // declaration....
  let n = points.length,
    answer = 0,
    temp = 0;

  // start processing..
  points = points.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < n; i++) {
    if (i == 1) {
      answer = Math.abs(points[i][0] - points[i - 1][0]);
    } else {
      temp = Math.abs(points[i][0] - points[i - 1][0]);
      if (temp > answer) answer = temp;
    }
  }
  return answer;
};
