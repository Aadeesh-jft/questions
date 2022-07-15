let inputString = "React Python Ansi-C javascript python Ansi-C JAVA PYTHON Ansi-C Java Ansi-C Javascript Python Ansi-C Java Ansi-C React JavaScript Ansi-C Java pythoN React javaScript AngulaR Ansi-C Python angular Java Javascript"
let sArray = inputString.split(" ");
let dCount = {};
console.log(sArray);
function duplicateCharacters(s, outputString = "") {
    for (let i = 0; i < s.length; i++) {
        if (s[i] in dCount) {
            dCount[s[i]]+= 1;
        }
        else {
            dCount[s[i]] = 1;
        }
    }
    console.log(dCount);
}

duplicateCharacters(sArray);