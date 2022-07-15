let arr = [5, 5, 5, 5, 4, 4, 4, 3, 10, 9, 8, 7, 6];
let numSet = new Set(arr);


function thirdLargestNum(set) {
    for (let i = 0; i < 2; i++) {
        largestNum = Math.max(...set);
        set.delete(largestNum);
    }
    return Math.max(...set);
}

console.log(thirdLargestNum(numSet))
