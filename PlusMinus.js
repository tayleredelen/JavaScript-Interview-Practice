//Given an array of integers, calculate the ratios of its elements that are positive, negative,
//and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
let zero = 0;
let positive = 0;
let negative = 0;

for (let i = 0; i < arr.length; i++) {
     if (arr[i] > 0){
        positive++;
    } else if (arr[i] < 0) {
        negative++;
    }else {
        zero++;
    }
    }
    
    let zeroCount = (zero / arr.length).toFixed(6);
    let positiveCount = (positive / arr.length).toFixed(6);
    let negativeCount = (negative / arr.length).toFixed(6);
    
    console.log(positiveCount);
    console.log(negativeCount);
    console.log(zeroCount);

}


function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
