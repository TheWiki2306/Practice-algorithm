function mergeSort(arrayList) {
    // this means the array is either empty or has one element
    if (arrayList.length <= 1) {
        return arrayList;
    }
    const midPoint = Math.floor(arrayList.length/2);

    // split the original array into two, recursively
    const leftList = mergeSort(arrayList.slice(0, midPoint));
    const rightList = mergeSort(arrayList.slice(midPoint));

    return mergeSort(leftList, rightList);
}

function merge(leftList, rightList) {

    const mergedList = [];

    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftList.length && rightIndex < rightList.length) {
        if (leftList[leftIndex] < rightList[rightIndex]) {
            mergedList.push(leftList[leftIndex]);
            leftIndex++;
        } else {
            mergedList.push(rightList[rightIndex]);
            rightIndex++;
        }
    }

    return mergedList.concat(leftList.slice(leftIndex)).concat(rightList.slice(rightIndex));
}


// Test

const arrayList = [7, 4, 9, 2, 23, 18, 78, 22, 0];
const result = mergeSort(arrayList);

console.log(result);
