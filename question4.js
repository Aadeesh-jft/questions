let inputNum = 8965;

function reverseNum(n, r = 0) {
    if (n == 0) {
        return r;
    }
    else {
        r = (r * 10) + (n % 10);
        n = Math.floor(n / 10);
        return reverseNum(n, r);
    }
}
console.log(reverseNum(inputNum));