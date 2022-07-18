let arr = [1, 2, 3, 4, 5, 15, "abcd", 10, "efgh", 5];
let l = arr.length;

function arrSum(arr, i = 0, sum = 0, outputString = "") {
    if (i == l) {
        return (sum);
    }
    else {
        if (typeof arr[i] == "number") {
            sum += arr[i];
            return arrSum(arr, i + 1, sum, outputString);
        } else if (typeof arr[i] == "string") {
            outputString += arr[i];
            return arrSum(arr, i + 1, sum, outputString);
        }
        return arrSum(arr, i + 1, sum, outputString);
    }
}
console.log(arrSum(arr));