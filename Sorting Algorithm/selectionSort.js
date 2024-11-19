let array = [7, 4, 10, 8, 3, 1];
const arrayLength = array.length;
let result = selectionSort(array, arrayLength);

function selectionSort(array, arrayLength) {
    for (let i = 0; i < arrayLength - 1; i++) {
        let minIndex = i;
        for (let j = i+1; j < arrayLength; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            } 
        }
        if (minIndex !== i) {
            let temp;
            temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }

    return { sortedArray: array };
}

console.log('Sorted Array: ', result.sortedArray);
