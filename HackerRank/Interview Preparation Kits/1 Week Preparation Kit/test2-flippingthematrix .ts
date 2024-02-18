'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}



/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function flippingMatrix(matrix: number[][]): number {
    // declaration 
    let n = matrix.length / 2;
    let mx = 0, sum = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            mx = Number.MIN_VALUE;
            mx = Math.max(matrix[i][j], mx);
            mx = Math.max(matrix[i][2 * n - j - 1], mx);
            mx = Math.max(matrix[2 * n - i - 1][j], mx);
            mx = Math.max(matrix[2 * n - i - 1][2 * n - j - 1], mx);

            sum += mx;
        }
    }
    return sum;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const q: number = parseInt(readLine().trim(), 10);

    for (let qItr: number = 0; qItr < q; qItr++) {
        const n: number = parseInt(readLine().trim(), 10);

        let matrix: number[][] = Array(2 * n);

        for (let i: number = 0; i < 2 * n; i++) {
            matrix[i] = readLine().replace(/\s+$/g, '').split(' ').map(matrixTemp => parseInt(matrixTemp, 10));
        }

        const result: number = flippingMatrix(matrix);

        ws.write(result + '\n');
    }

    ws.end();
}
