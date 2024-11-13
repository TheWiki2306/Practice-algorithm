let array = [5, 4, 10, 1, 6, 2];
const arrayLength = array.length;
let result = insertionSort(array);


function insertionSort(array) {
    for (let i = 1; i < arrayLength; i++) {
        let temp = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > temp) {
            array[j+1] = array[j];
            j--;
        }       
        array[j+1] = temp; 
    }

    return{ sortedArray: array};
}

console.table('SOrted Array: ', result.sortedArray);


