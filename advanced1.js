let inputX =  "123434545546547675012394";
let inputY = "1223435436565796877608";
let sum = 0;

function multiply(xString, yString) {
    let j = 1;
    for (let i = yString.length - 1; i >= 0; i--) {
        let count = Number(xString) * Number(yString[i]);
        sum += count * (j);
        j *= 10;
    }
    
    return sum;
}
console.log(multiply(inputX, inputY));
//7006652