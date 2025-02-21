// function to get the maximum number
function getMax(array) {
  const length = array.length;
  let mx = array[0];

  if (array.length === 0) {
    return [];
  }

  for (let i = 1; i < array.length; i++) {
    if (array[i] > mx) {
      mx = array[i];
    }
  }

  return mx;
}

// The counting sort function
function count(array, exp) {
  const length = array.length;
  let output = Array(length);
  let count = Array(10).fill(0);

  // this is add the frequency of the digits to the count array
  for (let i = 0; i < length; i++) {
    let digit = Math.floor(array[i] / exp) % 10;
    count[digit]++;
  }

  // this is to replace the perform prefix sum, to switch the count with the actual index position
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // this is to build the output array
  for (let i = length - 1; i >= 0; i--) {
    const digit = Math.floor(array[i] / exp) % 10;
    output[count[digit] - 1] = array[i];
    count[digit]--;
  }

  return output;
}

function radixSort(array) {
  const maxNum = getMax(array);
  let sortedArray = [...array];

  for (let exp = 1; Math.floor(maxNum / exp) > 0; exp *= 10) {
    sortedArray = count(sortedArray, exp);
  }

  return sortedArray;
}

const array = [125, 78, 2, 178, 264, 111, 578, 2345, 1, 9];
let result = radixSort(array);
console.log(result);
