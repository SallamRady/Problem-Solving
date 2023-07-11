/**
 * @param {number[]} nums
 * @return {number}
 */

function getAllSubsets(array) {
    const subsets = [];
    function generateSubsets(index, currentSubset) {
        if (index === array.length) {
            subsets.push(currentSubset);
            return;
        }
        generateSubsets(index + 1, currentSubset.concat(array[index]));
        generateSubsets(index + 1, currentSubset);
    }
    generateSubsets(0, []);
    return subsets;
}
var subsetXORSum = function (nums) {
    let subArrs = getAllSubsets(nums), answer = 0, temp = 0;
    subArrs.forEach(arr => {
        temp = 0;
        for (let i = 0; i < arr.length; i++) {
            temp ^= arr[i];
        }
        answer +=temp;
    });
    return answer;
};