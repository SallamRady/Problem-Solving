/**
 * piovt
 * time complixty : O(n)
 * @param {*} arr1 incomming array
 * @param {*} start start index in array
 * @param {*} end end index in array
 * @returns index refer to position of where should put poivt element in array.
 */
function piovt(arr, start = 0, end = arr.length - 1) {
    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    let poivtElement = arr[start], swapIdx = start;
    for (let i = start + 1; i <= end; i++) {
        if (poivtElement > arr[i]) {
            swapIdx++;
            swap(arr, i, swapIdx);
        }
    }
    swap(arr, start, swapIdx);
    return arr;
}
/**
 * quickSort
 * time complixty : O(n*log(n))
 * complixty Details : split function->o(log(n)) , piovt->O(n)
 * @param {*} arr incomming array u want to sort
 * @returns array after sort.
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let piovtIdx = piovt(arr, left, right);
        //left
        quickSort(arr, left, piovtIdx - 1);
        //right
        quickSort(arr, piovtIdx + 1, right);
    }
    return arr;
}

//test
console.log(quickSort([4, 1, 6, -1, 13]));