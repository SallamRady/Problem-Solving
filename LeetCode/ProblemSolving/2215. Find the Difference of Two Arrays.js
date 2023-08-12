/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let answer = [[], []], frq1 = {}, frq2 = {};
    nums1.forEach(n => {
        if (!(n in frq1))
            frq1[n] = 1;
        else frq1[n]++;
    });
    nums2.forEach(n => {
        if (!(n in frq2))
            frq2[n] = 1;
        else frq2[n]++;
    });

    for (let key in frq1) {
        if (!(key in frq2)) answer[0].push(key);
    }
    for (let key in frq2) {
        if (!(key in frq1)) answer[1].push(key);
    }

    return answer;
};