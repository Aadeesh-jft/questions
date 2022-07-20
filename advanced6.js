let targetWord = prompt("Enter the target word: ");
let gameString = prompt("Enter the game string: ");

//let targetWord = "telephone";
//let gameString = "t_l__ho__"
let arr = targetWord.split("");
let gameArr = gameString.split("");
let gameDict = {};


for (let i = 0; i < arr.length; i++) {
    if (arr[i] in gameDict) {
        gameDict[arr[i]].push(i);
    }
    else {
        gameDict[arr[i]] = [i];
    }
}
console.log(gameDict);
console.log(arr);
console.log(gameArr);

for (let i = 0; i < 11; i++) {
    let userGuess = prompt("Enter your guess: ");
    if (gameArr.join("") == targetWord) {
        alert("You win!")
    }
    else if (arr.indexOf(userGuess) != -1) {
        console.log("Correct! Updating game string...");
        let indexesOfGuess = gameDict[userGuess];
        console.log(indexesOfGuess);
        for (let i = 0; i < indexesOfGuess.length; i++) {
            gameArr[indexesOfGuess[i]] = userGuess;
        }
        if (gameArr.join("") == targetWord) {
            alert("You win!")
            break;
        }
    } 
    else {
        console.log("Wrong guess, try again.")
    }
    console.log(9 - i, " tries left.")
}
