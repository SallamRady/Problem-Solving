/**
 * insertionSort
 * time complexity : O(n*n)=>O(n^2)
 * @param {*} arr incomming array
 * @returns array after sorted
 */
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        for (let j = i; j >= 0 && arr[j] < arr[j - 1]; j--) {
            //swapping
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        }
    }
    return arr;
}


//test
console.log(insertionSort([4, 1, 6, -1, 13]));