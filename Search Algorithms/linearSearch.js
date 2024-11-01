// Function to get a a searched key in a queue
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const index = linearSearch(arr, 10)

// if (index != -1) {
//     console.log(`Found: ${index}`);
    
// } else {
//     console.log('not found');
    
// }

function linearSearch(arr, targetWorstCase) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === targetWorstCase) {
            return i;
        }
        
    }

    return -1;
}


// Performance Analysis of the Linear search
function linearSearchAnalysis() {
    const sizes = [10, 100, 1000, 10000, 100000];
    const results = [];
  
    sizes.forEach(size =>{
        //Note: (_, index) => index, is a mapping function and it basically maps the current element(which is what the _ parameter takes), to the index of that current element(which is what the second parameter, index, takes). 
        const arr = Array.from({ length: size}, (_, index) => index);
        // This is worst case(i. e the target value is at the end)
        const targetWorstCase = size - 1;
        // This is best case(i.e the target value is at the beginning)
        // const targetBestCase = arr[0]; 

        const startTime = performance.now();
        const index = linearSearch(arr, targetWorstCase);
        const endtime = performance.now();

        results.push({
            size,
            index,
            targetWorstCase,
            startTime,
            endtime,
            time: endtime-startTime
        })
    })

    console.table(results);
}

linearSearchAnalysis();