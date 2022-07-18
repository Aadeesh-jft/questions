let inputArr = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];
let numArr = [];
let stringArr = [];

for (let i = 0; i < inputArr.length; i++) {
    if (typeof inputArr[i] == "number") {
        numArr.push(inputArr[i]);
    }
    else {
        stringArr.push(inputArr[i]);
    }
}

numArr.sort();
stringArr.sort();
numArr = numArr.concat(stringArr);
console.log(numArr);