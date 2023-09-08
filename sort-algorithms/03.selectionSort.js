/**
 * selectionSort
 * time complexity : O(n*n)=>O(n^2)
 * @param {*} arr incomming array
 * @returns array after sorted
 */
function selectionSort(arr) {
    let n = arr.length, mnIdx;
    for (let i = 0; i < n; i++) {
        mnIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[mnIdx]) mnIdx = j;
        }
        //swapping
        [arr[i], arr[mnIdx]] = [arr[mnIdx], arr[i]];
    }
    return arr;
}


//test
console.log(selectionSort([4, 1, 6, -1, 13]));