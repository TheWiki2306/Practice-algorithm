let array = [15, 5, 24, 8, 1, 3, 16, 10, 20];
let lowerBound = 0;
let upperBound = array.length - 1;
const result = mergeSort(array, lowerBound, upperBound);



function mergeSort(array, lowerBound, upperBound) {
  
    if(lowerBound < upperBound){
        let mid = Math.floor( (lowerBound + upperBound ) / 2 );
        
        mergeSort(array, lowerBound, mid)
        mergeSort(array, mid + 1, upperBound)
        
        merge(array, lowerBound, mid, upperBound)
    }

    return array;

}

function merge(array, lowerBound, mid, upperBound) {
    let i = lowerBound;
    let j = mid + 1;
    let tempArray = [];

    while (i <= mid && j <= upperBound) {
        if (array[i] <= array[j]) {
            tempArray.push(array[i]);
            i++;
        } else {
            tempArray.push(array[j]);
            j++;
        }

    }

    if ( i > mid) {
        while (j <= upperBound) {
            tempArray.push(array[j]);
            j++;
        }
    } else if( j > upperBound) {
        while(i <= mid){
            tempArray.push(array[i])
            i++;
        }
    }

    for ( let k = 0; k < tempArray.length; k++) {
        array[lowerBound + k] = tempArray[k];
    }

}

console.log(result);

