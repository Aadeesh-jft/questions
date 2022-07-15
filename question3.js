//Solution to question 1
function stringReverser(s, l, outputString = "") {
    if ((l) == 0) {
        return outputString;
    } 
    else {
        outputString += s[l - 1];
        return stringReverser(s, l - 1, outputString);
    }
}

let inputSentence = "Hi my name is Aadeesh";

function sentenceReverser(sentenceArray, outputString = "") {
    /*
    for (let i = 0; i < sentenceArray.length; i++) {
        sentenceArray[i] = stringReverser(sentenceArray[i], sentenceArray[i].length);  
    }
    console.log(sentenceArray);
    */
    sentenceArray.forEach(word => {
        outputString += stringReverser(word, word.length) + " ";
    });
    return outputString;
}
console.log(sentenceReverser(inputSentence.split(" ")));