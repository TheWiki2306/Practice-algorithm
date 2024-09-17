function summation() {
    let sumOfNumbers = 0;

    for (let i = 1; i < 5; i++) {
        sumOfNumbers = sumOfNumbers + i;
        
    }

    return sumOfNumbers;
    
}


let sumArray = [1,4,2,1,3];
let n = sumArray.length;

sumOfArray(sumArray, n)

function sumOfArray(sumArray, n) {
    s = 0;
    for (let i = 0; i < n; i++) {
        s = s + sumArray[i];
    }

    return s;
}


// FIBONACCI SEQUENCE
function fibonacii(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2];        
    }

    return fib.slice(0, n);
}

console.log(fibonacii(2));
console.log(fibonacii(4));
console.log(fibonacii(20));
// The time complexity is O(n)


// FACTORIAL
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i        
    }

    return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(100));
// Time complexity: O(n)


// PRIME NUMBERS
function primeNumbers(n) {
    if (n < 2) {
        return false;
    }
        for (let i = 2; i < n; i++) {
            if (n%i === 0) {
                return false;
            }  
        }
    return true;
}

// console.log(primeNumbers(1));
// console.log(primeNumbers(4));
// console.log(primeNumbers(5));
// console.log(primeNumbers(7));
// Time complexity: O(n)


// POWER OF 2
function powerOfTwo(n){
    if (n < 1){
        return false;
    }
    while (n > 1) {
        
    if (n % 2 !== 0) {
            return false;
        }

        n = n/2;
    }

    return true;
}

// console.log(powerOfTwo(2));
// console.log(powerOfTwo(4));
// console.log(powerOfTwo(64));
// console.log(powerOfTwo(20));
// Time complexity: O(logn) - Here the number of instruction execution increases, but not at the same rate of the input

    // Another solution - Here the time complexity: O(1);
    function isPowerOfTwoBitWise(n) {
        if (n < 1) {
            return false;
        }

        return (n & (n - 1)) === 0;
    } 

    console.log(isPowerOfTwoBitWise(2));
    console.log(isPowerOfTwoBitWise(4));
    console.log(isPowerOfTwoBitWise(64));
    console.log(isPowerOfTwoBitWise(20));
    console.log(isPowerOfTwoBitWise(96));
    
