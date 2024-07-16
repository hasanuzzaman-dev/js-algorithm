function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(5));

//! Big O - O(n)

function recursiveFibonacci(n) {
    if (n < 2) {
        return n;
    }

    return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}

console.log(`Recursive Fibonacci: ${recursiveFibonacci(0)}`);
console.log(`Recursive Fibonacci: ${recursiveFibonacci(1)}`);
console.log(`Recursive Fibonacci: ${recursiveFibonacci(8)}`);

//! Big O -> O(2^n)
