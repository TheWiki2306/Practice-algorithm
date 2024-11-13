let numArray = [12, 24, 16, 2, 9, 15];
// let numArray = [15, 16, 6, 8, 5];
let result = bubbleSort(numArray);

function bubbleSort(numArray) {
    let n = numArray.length; 
    let comparisons = 0;
    let swaps = 0;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            comparisons++;
            if (numArray[j] > numArray[j + 1]) {
               [numArray[j], numArray[j + 1]] = [numArray[j + 1], numArray[j]];   
               swaps++;           
            }
        }
    }

    return {
        sortedArray: numArray,
        comparisons: comparisons,
        swaps: swaps
    };
}


console.log('Sorted Array: ', result.sortedArray);
console.log('Comparison: ', result.comparisons);
console.log('Swaps: ', result.swaps);




