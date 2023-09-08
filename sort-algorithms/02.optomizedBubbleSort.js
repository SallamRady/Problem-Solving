/**
 * optomizedBubbleSort
 * time complexity : O(n*n)=>O(n^2) But it's butter than normal bubble sort.
 * @param {*} arr incomming array
 * @returns array after sorted
 */
function optomizedBubbleSort(arr) {
    let n = arr.length, noSwaps = true;
    for (let i = n - 1; i >= 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //swapping...
                noSwaps = false;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        if (noSwaps) break;
    }
    return arr;
}


//test
console.log(optomizedBubbleSort([4, 1, 6, -1, 13]));