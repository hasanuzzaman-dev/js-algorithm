function factorial(n) {
    let result = 1;
    for (let i = n; i >= 1; i--) {
        result = result * i;
    }

    return result;
}


console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(1));

// Big O - O(n)
