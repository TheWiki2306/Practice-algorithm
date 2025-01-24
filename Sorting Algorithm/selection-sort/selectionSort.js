
function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i+1; j < array.length; j++) {
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


let array = [7, 4, 10, 8, 3, 1, 5, 9, 8];
let result = selectionSort(array);
console.log('Sorted Array: ', result.sortedArray);
