let inputString = "React Python Ansi-C javascript python Ansi-C JAVA PYTHON Ansi-C Java Ansi-C Javascript Python Ansi-C Java Ansi-C React JavaScript Ansi-C Java pythoN React javaScript AngulaR Ansi-C Python angular Java Javascript"
let splitArray = inputString.split(" ");
//console.log(splitArray);
function duplicateCharacters(s, dCount = {}) {
    for (let i = 0; i < s.length; i++) {
        let currElement = s[i].toUpperCase();
        if (currElement.toUpperCase() in dCount) {
            dCount[currElement]+= 1;
        }
        else {
            dCount[currElement] = 1;
        }
    }
    return dCount
}

countedDict = duplicateCharacters(splitArray);
console.log(countedDict);
array = [];
for (key in countedDict) {
    tempArr = [countedDict[key], key];
    //console.log(key);
    //console.log(tempArr);
    array.push(tempArr);
}
/*
console.log(array);
console.log(array.sort().reverse());
function sorter(array) {
    for (let i = 0; i < array.length - 1; i++) {
        
        let currMin = array[i];
        currMinPos = i;
        console.log(currMin);
        let temp = array[i];
        
        for (let j = i + 1; j < array.length; j++) {  
            if (array[j][0] > currMin[0]) {
                currMin = array[j];
                currMinPos = j;
            }
        }
        //console.log(currMin)
        //console.log("========");
        
        array[i] = currMin;
        array[currMinPos] = temp;

    }
    //console.log(array);
    
    for (let i = 0; i < array.length - 1; i++) {
        if ((array[i][0] == array[i + 1][0]) && (array[i][1] > array[i + 1][1])) {
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }
    }
    //console.log(array);
    
}
*/
array.sort().reverse()
for (let i = 0; i < array.length - 1; i++) {
    if ((array[i][0] == array[i + 1][0]) && (array[i][1] > array[i + 1][1])) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
    }
}
console.log(array);