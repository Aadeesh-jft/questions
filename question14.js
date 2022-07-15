let inputMap = {Developer: 5, Designer: 3, QA: 4, Manager: 1};

//A) [[‘Developer’,‘Developer’,‘Developer’,‘Developer’,‘Developer’],[‘Designer’,‘Designer’‘Designer’],[‘QA’, ‘QA’, ‘QA’,‘QA’], [‘Manager’]]

//B) [‘Developer’,‘Developer’,‘Developer’,‘Developer’,‘Developer’,‘Designer’,‘Designer’‘Designer’,‘QA’, ‘QA’, ‘QA’,‘QA’, ‘Manager’]
console.log(inputMap);
function arrayCreator(inputDict, arr1 = []) {
    console.log(inputDict);
    for (key in inputMap) {
        console.log(key);
        console.log(inputDict[key]);
    }
}
arrayCreator(inputMap);