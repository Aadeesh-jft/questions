function arrSum(arr, i = 0) {
    if (i == l) {
        return sum;
    }
    else {
        sum += arr[i];
        return arrSum(arr, i + 1);
    }
}

let n = 100;
nSum = n * (n + 1) / 2;
console.log(nSum);

function missingNumberFinder(arr, nSum) {
    let sum = arrSum(arr);
    
    let diff = nSum - sum;
    return diff;
}