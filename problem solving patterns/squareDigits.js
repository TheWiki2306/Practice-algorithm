function squareDigits(num) {
  const digits = num.toString();
  const result = [];

  for (const index in digits) {
    result.push(parseInt(digits[index]) ** 2);
  }

  return parseInt(result.join(""));
}

console.log(squareDigits(2345));
