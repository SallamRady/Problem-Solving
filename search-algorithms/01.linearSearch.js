/**
 * linerSearch
 * time complexity : O(n)
 * @param {*} arr incomming array
 * @param {*} target element u search about
 * @returns index of element if i found or -1
 */
function linerSearch(arr, target) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}