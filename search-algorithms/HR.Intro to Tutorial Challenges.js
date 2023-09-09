'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'introTutorial' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER V
 *  2. INTEGER_ARRAY arr
 */

function introTutorial(V, arr) {
    // Write your code here
    return binarySearch(arr, V);
}

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

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const V = parseInt(readLine().trim(), 10);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = introTutorial(V, arr);

    ws.write(result + '\n');

    ws.end();
}
