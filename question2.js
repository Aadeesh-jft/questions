let arr = [1, 2, 3, 4, 5, 15];
let l = arr.length;
let sum = 0;
function arrSum(arr, i = 0) {
    if (i == l) {
        return sum;
    }
    else {
        sum += arr[i];
        return arrSum(arr, i + 1);
    }
}
console.log(arrSum(arr));