function arrSum(arr, i = 0) {
    if (i == l) {
        return sum;
    }
    else {
        sum += arr[i];
        return arrSum(arr, i + 1);
    }
}

function missingNumberFinder(arr) {
    let sum = arrSum(arr);
    //sum of all natural numbers 1-100 is 5050
    let diff = 5050 - sum;
    return diff;
}