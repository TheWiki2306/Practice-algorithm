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

    return fib;
}

console.log(fibonacii(2).parseInt());
console.log(fibonacii(4));
console.log(fibonacii(20));

