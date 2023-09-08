function getMax(arr) {
    let max = Math.abs(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        const absValue = Math.abs(arr[i]);
        if (absValue > max) {
            max = absValue;
        }
    }
    return max;
}

function countingSort(arr, exp) {
    const n = arr.length;
    const output = new Array(n).fill(0);
    const count = new Array(19).fill(0); // Range: -9 to 9

    for (let i = 0; i < n; i++) {
        const digit = Math.floor(arr[i] / exp) % 10 + 9; // Shift range to 0-18
        count[digit]++;
    }

    for (let i = 1; i < 19; i++) {
        count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10 + 9; // Shift range to 0-18
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr) {
    const max = getMax(arr);

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSort(arr, exp);
    }

    return arr;
}
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    return radixSort(nums);
};