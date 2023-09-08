/**
 * merge
 * time complixty : O(n)
 * @param {*} arr1 array number 1
 * @param {*} arr2 array number 2
 * @returns sorted array as a result of merge arr1 and arr2
 */
function merge(arr1, arr2) {
    let len1 = arr1.length, len2 = arr2.length, p1 = 0, p2 = 0, arr3 = [];

    while (p1 < len1 && p2 < len2) {
        if (arr1[p1] < arr2[p2]) {
            arr3.push(arr1[p1]);
            p1++;
        } else {
            arr3.push(arr2[p2]);
            p2++;
        }
    }
    while (p1 < len1) {
        arr3.push(arr1[p1]);
        p1++;
    }

    while (p2 < len2) {
        arr3.push(arr2[p2]);
        p2++;
    }
    return arr3;
}

/**
 * mergeSort
 * time complixty : O(n*log(n))
 * complixty Details : split function->o(log(n)) , merge->O(n)
 * @param {*} arr incomming array u want to sort
 * @returns array after sort.
 */
function mergeSort(arr) {
    if (arr.length == 1)//base case
        return arr;

    let midPoint = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, midPoint));
    let right = mergeSort(arr.slice(midPoint));
    return merge(left, right);
}

//test
console.log(mergeSort([4, 1, 6, -1, 13]));