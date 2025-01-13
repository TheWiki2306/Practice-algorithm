let array = [10, 16, 8, 12, 15, 6, 3, 9, 5, 17];
let lowerBound = 0;
let higherBound = array.length - 1;
let result = quickSort(array, lowerBound, higherBound)


function quickSort(array, lowerBound, higherBound) {
    if (lowerBound < higherBound) {
        const location = partition(array, lowerBound, higherBound)

        quickSort(array, lowerBound, location - 1);
        quickSort(array, location + 1, higherBound);
    }
    
    return array;
}

function partition(array, lowerBound, higherBound) {
    let pivot = array[lowerBound];
    let start = lowerBound;
    let end = higherBound;

    while (start < end) {
        while (array[start] <= pivot) {
            start++;
        }

        while (array[end] > pivot){
            end--;
        }

        if (start < end) {
            [array[start], array[end]] = [array[end], array[start]];
        }
    }

    [array[lowerBound], array[end]] = [array[end], array[lowerBound]];

    return end;
}

console.table(result);
