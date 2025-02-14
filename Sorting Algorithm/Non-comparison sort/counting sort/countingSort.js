// // The idea behind this algorithm is to first create and empty array. Ths array will be used to
// // count the frequency of the elemnts in the original array. The count array is initially initialized to 0.
// // Then the array is updated by 1, with each appearance of an element in the original array.
// // After that, starting from the minimun element we start updating the original array with the sorted elements with respect to the number of times they appear.
 



function countingSort(array) {
  if (array.length === 0) {
    return [];
  }

  let maxElement = Math.max(...array);
  let minElement = Math.min(...array);
  let count = new Array(maxElement - minElement + 1).fill(0);

  for (let i = 0; i < array.length; i++) {
    count[array[i] - minElement]++;

  }

  let sortedArray = [];
  for (let i = 0; i < count.length; i++) {
    const element = i + minElement
    while (count[i] >  0) {
      sortedArray.push(element);
      count[i]--;
    }    
  }

  return sortedArray;
 
}


const arrayList = [5, 2, 9, 7, 5, 8, 9, 5, 2, 3, 3, 4, 6, 1, 0]
let result = countingSort(arrayList);
console.log(result);
