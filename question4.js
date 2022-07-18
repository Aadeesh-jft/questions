let inputNum = 9999;

let inputString = String(inputNum);

function reverseNum(s, l, outputString = "") {
    if ((l) == 0) {
        return outputString;
    } 
    else {
        outputString += s[l - 1];
        return reverseNum(s, l - 1, Number(outputString));
    }
}

console.log(reverseNum(inputString, inputString.length));

/*
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
*/