/*
let randomNumber = Math.random() * 3;
randomNumber = Math.floor(randomNumber);

console.log(randomNumber);
*/
/*
for (let i = 0; i < 100; i++) {
    let randomNumber = Math.random() * 3;
    randomNumber = Math.floor(randomNumber);
    console.log(randomNumber);
}
*/



//let userChoice = prompt("Enter your choice: ").lower();

//let computerChoice = possibleChoices[randomNumber];
/*
if (userChoice == computerChoice) {
    console.log("Tie");
} else if (userChoice == "Rock" && computerChoice == "Paper") {
    console.log("Computer Wins!");
} else if (userChoice == "Rock" && computerChoice == "Scissor") {
    console.log("User Wins!");
} else if (userChoice == "Paper" && computerChoice == "Scissor") {
    console.log("User Wins!");
} else if (userChoice == "Paper" && computerChoice == "Rock") {
    console.log("User Wins!");
} else if (userChoice == "Scissor" && computerChoice == "Rock") {
    console.log("Computer wins");
} else if (userChoice == "Scissor" && computerChoice == "Paper") {
    console.log("User Wins!");
}
*/

let matchLogs = [];
function match(userChoice, computerChoice, i) {
    console.log("Computer chose ", computerChoice)
    if (userChoice == computerChoice) {
        console.log("Tie");
        matchLogs.push([i, userChoice, computerChoice, "Tie"]);
    } else if (userChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("User Wins!");
            matchLogs.push([i, userChoice, computerChoice, "UserWin"]);
        } 
        else {
            console.log("Computer Wins!");
            matchLogs.push([i, userChoice, computerChoice, "ComputerWin"]);
        }
    } else if (userChoice == "rock") {
        if (computerChoice == "scissors") {
            matchLogs.push([i, userChoice, computerChoice, "UserWin"]);
            console.log("User Wins!");
        }
        else {
            console.log("Computer Wins!");
            matchLogs.push([i, userChoice, computerChoice, "ComputerWin"]);
        }
    } else if (userChoice == "scissors") {
        if (computerChoice == "paper") {
            matchLogs.push([i, userChoice, computerChoice, "UserWin"]);
            console.log("User Wins!");
        } 
        else {
            console.log("Computer Wins!");
            matchLogs.push([i, userChoice, computerChoice, "ComputerWin"]);
        }
    }
}

let i = 0;
let possibleChoices = {0: "Rock", 1: "Paper", 2: "Scissors"};

while (true) {
    let randomNumber = Math.random() * 3;
    randomNumber = Math.floor(randomNumber);
    let userChoice = prompt("Enter your choice: ").toLowerCase();
    let computerChoice = possibleChoices[randomNumber].toLowerCase();
    match(userChoice, computerChoice, i);
    i++;
    let choice = prompt("Press n to stop playing. Press l to view game logs, press any other key to play again.");
    if (choice == "n") {
        break;
    } else if (choice == "l") {
        console.log(matchLogs);
    }
}