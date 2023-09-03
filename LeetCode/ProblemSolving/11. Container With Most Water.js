/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let n = height.length, i = 0, j = n - 1, answer = 0, area = 0;
    while (i < j && i < n && j >= 0) {
        let y = Math.min(height[i], height[j]);
        let x = j - i;
        area = x * y;
        if (area > answer) {
            answer = area;
        }

        if (height[i] > height[j]) j--;
        else i++;
    }
    return answer;
};