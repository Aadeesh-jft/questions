let inputString = "aadeesh";
let sArray = inputString.split("");
console.log(sArray);
function duplicateCharacters(s, dCount = {}) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] in dCount) {
            dCount[s[i]]+= 1;
        }
        else {
            dCount[s[i]] = 1;
        }
    }
    for (key in dCount) {
        if (dCount[key] > 1) {
            console.log(key, dCount[key]);
        }
    }
    //console.log(dCount);
}
duplicateCharacters(inputString);