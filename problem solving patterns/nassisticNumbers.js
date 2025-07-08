function narcissistic(value) {
  let val = value.toString();
  let power = val.length;
  let sum = 0;

  for (const num in val) {
    sum += parseInt(val[num] ** power);
  }

  if (sum === value) {
    return true;
  }
  return false;
}

console.log(narcissistic(153));
