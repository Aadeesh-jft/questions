let arr = [26, "JFT", "Jellyfish", true, 3, "", 0];

function rightRotater(arr) {
    let stack = []
    stack.push(arr[arr.length - 1]);
    for (let i = 0; i < arr.length - 1; i++) {
        stack.push(arr[i]);
    }
    //console.log(arr);
    return (stack);
    
}

let numRotations = 3;

for (let i = 0; i < numRotations; i++) {
    arr = rightRotater(arr);
}
console.log(arr);