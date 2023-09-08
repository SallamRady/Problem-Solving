/**
 * binarySearch
 * time complexity : O(log(n))
 * @param {*} arr (Array must be sorted) incomming array
 * @param {*} target element u search about
 * @returns index of element if i found or -1
 */
function binarySearch(arr, target) {
    let l = 0, r = arr.length - 1, mid;
    while (l <= r) {
        mid = Math.floor((l + r) / 2);
        if (arr[mid] == target) return mid;
        if (arr[mid] > target) r = mid - 1;
        else l = mid + 1;
    }
    return -1;
}

console.log(binarySearch([5],5))