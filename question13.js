let arr = [1, 2, 4, 5, 6, 6, 7, 4, 4, 1, 1, 2];

//let set = new Set(arr);

function removeDupes(arr, returnArr = []) {
    for (let i = 0; i < arr.length; i++) {
        if (returnArr.indexOf(arr[i]) == -1) {
            returnArr.push(arr[i]);
        }
    }
    return returnArr;
}
console.log(removeDupes(arr));