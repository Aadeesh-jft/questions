let inputMap = {Developer: 5, Designer: 3, QA: 4, Manager: 1};

//A) [[‘Developer’,‘Developer’,‘Developer’,‘Developer’,‘Developer’],[‘Designer’,‘Designer’‘Designer’],[‘QA’, ‘QA’, ‘QA’,‘QA’], [‘Manager’]]

//B) [‘Developer’,‘Developer’,‘Developer’,‘Developer’,‘Developer’,‘Designer’,‘Designer’‘Designer’,‘QA’, ‘QA’, ‘QA’,‘QA’, ‘Manager’]
console.log(inputMap);
function arrayCreator(inputDict, arr1 = [], arr2 = []) {
    console.log(inputDict);
    let tempArr = [];
    for (key in inputMap) {
        console.log(key);
        console.log(inputDict[key]);
        tempArr = [];
        for (let i = 0; i < inputDict[key]; i++) {
            arr1.push(key);
            tempArr.push(key);
        }
        arr2.push(tempArr);
    }
    console.log(arr1);
    console.log(arr2);
}
arrayCreator(inputMap);