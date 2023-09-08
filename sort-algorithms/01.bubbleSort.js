/**
 * bubbleSort
 * time complexity : O(n*n)=>O(n^2)
 * @param {*} arr incomming array
 * @returns array after sorted
 */
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[j] > arr[i]) {
                //swapping.........
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}

//test
console.log(bubbleSort([4, 1, 6, -1, 13]));