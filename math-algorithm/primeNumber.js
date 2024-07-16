function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i < n; i++){
        if (n % i === 0) return false;

    }

    return true;
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(9));

//! Big O - O(n)

console.log("Another way")
// Another way
function isPrime2(n) {
    if (n < 2) return false;

    for (let i = 2; i <=Math.sqrt(n) ; i++){
        if (n % i === 0) return false;

    }

    return true;
}

console.log(isPrime2(1));
console.log(isPrime2(5));
console.log(isPrime2(9));

//! Big O - O(sqrt(n))
