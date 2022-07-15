let inputString = "aadeesh";
let sArray = inputString.split("");
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
duplicateCharacters(inputString);