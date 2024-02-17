'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    // declaration
    let positiveCount = 0,negativeCount = 0,zerosCount = 0,
    n = arr.length;
    
    for(let i=0;i<n;i++){
        if(arr[i] > 0)positiveCount++;
        else if(arr[i] < 0)negativeCount++;
        else zerosCount++;
    }
    // prepare result
    let positiveRatio = (positiveCount/n).toFixed(6);
    let negativeRatio = (negativeCount/n).toFixed(6);
    let zerosRatio = (zerosCount/n).toFixed(6);
    
    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zerosRatio);
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
