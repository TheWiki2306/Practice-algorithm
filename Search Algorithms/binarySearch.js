// const array = [3, 6, 8, 12, 14, 17, 25, 29, 31, 36, 42, 47, 53, 55, 62];
// const key = 42;
// const result = binarySearch(array, key);
// const index = array.indexOf(key);

// if (result != -1) {
//     console.log(`found key: ${key}, at index: ${index}`);
    
// } else {
//     console.log('Key not in the list');
    
// }

function binarySearch(array, key) {
    let low = 0;
    let high = array.length - 1;
    
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (key === array[mid]) {
            return mid;
        } else if (key > array[mid]) {
            low = mid + 1;
        } else {
            high = mid -1
        }
    }
    return -1;
}


// Performance Aanlysis
function binarySearchAnalysis() {
    const sizes = [10, 100, 1000, 10000, 100000]
    const results = [];

    sizes.forEach(size => {
        const array = Array.from({ length: size}, (_, index) => index);
        const key = 4;

        const startTime = performance.now();
        const index = binarySearch(array, key);
        const endTime = performance.now();

        results.push({
            size,
            index,
            key,
            time: endTime-startTime,
        })
    })

    console.table(results);
}

binarySearchAnalysis();