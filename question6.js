arr = [1, 2, 4, 5, 6, 7 ,7, 8, 9, 10];

function thirdLargestNum(arr) {
    if (arr.length == 2) {
        return (Math.min(...arr));
    }
    set = new Set(arr);
    for (let i = 0; i < 2; i++) {
        largestNum = Math.max(...set);
        set.delete(largestNum);
    }
    return (Math.max(...set));
}