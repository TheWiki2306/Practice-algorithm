function getMax(array) {
  const length = array.length;
  let mx = array[0];

  for (let i = 0; i < length; i++) {
    if (array[i] > mx) {
      mx = array[i];
    }
  }

  return mx;
}

function count(array, exp) {
  const length = array.length;
  let output = Array(length);
  let count = new Array(10).fill(0, 0);

  for (let i = 0; i < length; i++) {
    let digit = Math.floor(array[i] / exp) % 10;
    count[digit]++;
  }
}
