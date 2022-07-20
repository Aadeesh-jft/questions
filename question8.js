let x = Math.random() * 100;
console.log(x);
function isEven(n) {
    if ((n % 2) == 1) {
        return false;
    }
    else {
        return true;
    }
}
if (isEven(x)) {
    console.log(`${x} is even`)
} else {
    console.log(`${x} is odd.`)
}