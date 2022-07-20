let inputString = "hi";
let l = inputString.length;

function stringReverser(s, l, outputString = "") {
    if ((l) == 0) {
        return outputString;
    } 
    else {
        outputString += s[l - 1];
        return stringReverser(s, l - 1, outputString);
    }
}

console.log(stringReverser(inputString, l));

/*
outputString += inputString[l - 1];
console.log(outputString);
outputString += inputString[l - 2];
console.log(outputString);
outputString += inputString[l - 3];
console.log(outputString);
outputString += inputString[l - 4];
console.log(outputString);
*/