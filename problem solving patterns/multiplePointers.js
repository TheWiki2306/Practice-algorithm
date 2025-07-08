const sumZero = (values) => {
  let pointer_A = 0;
  let pointer_B = values.length - 1;

  while (pointer_A < pointer_B) {
    let sum = values[pointer_A] + values[pointer_B];
    if (sum === 0) {
      return [values[pointer_A], values[pointer_B]];
    } else if (sum > 0) {
      pointer_B--;
    } else {
      pointer_A++;
    }
  }
};

const ARRAY = [-4, -2, -1, 0, 1, 2, 3, 5];
// console.log(sumZero(ARRAY));

const countUniqueValues = (arr) => {
  let count = 0;
};

const num = 10;
console.log(num.toString(2));
