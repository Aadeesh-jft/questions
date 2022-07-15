let arr = [1, 2, 4, 5, 6, 6, 7, 4, 4, 1, 1, 2];

function countNums(arr, dict = {}) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in dict) {
            dict[arr[i]] += 1; 
        }
        else {
            dict[arr[i]] = 1;
        }
    }
    return dict;
}

console.log(countNums(arr));