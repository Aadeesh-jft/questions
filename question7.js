let x = Math.random() * 100;
x = Math.floor(x)
console.log(x);


function isPrime(n, i = 2) {
    if (n == 1) {
        return false;
    }
    if (n == i) {
        return true;
    }
    else {
        if (n % i != 0) {
            return isPrime(n, i + 1);
        }
        else if (n % i == 0) {
            return false;
        }
    }
}
console.log(isPrime(x));