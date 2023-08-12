/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let frq1 = {}, frq2 = {}, arr = [];
    nums1.forEach(n => {
        if (!(n in frq1)) frq1[n] = 1;
        else frq1[n]++;
    });
    nums2.forEach(n => {
        if (!(n in frq2)) frq2[n] = 1;
        else frq2[n]++;
    });
    for (let key in frq1) {
        if (frq1[key] > 0 && frq2[key] > 0) arr.push(key);
    }
    return arr;
};