// =======================
// While Loop Examples
// =======================

// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code...");
// }
// console.log("CONGRATS YOU GOT THE SECRET!!!")

// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("OK YOU WIN!")

// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }



// =======================
// Guess Number Game
// =======================

// Takes user input and changes it into an int (uses parseInt). Asks for max number
// to create the difficulty of the game. Higher max number = harder game
let maximum = parseInt(prompt("Enter the maximum number!"));
// Checks if maximum number user imput is an integer, if not, then asks again for
// valid int and type.
// Works bc if other type is input and changed using parseInt, then it outputs NaN
// Therefore, since we know NaN is falsey, we can use that to ensure that until # occurs,
// it is always true.
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

// Creates random number for user to guess between 0 and maximum number
const targetNum = Math.floor(Math.random() * maximum) + 1;

// Allows user to guess integer
// Note: A bug appears here as if user wants to quit immediately, then it won't quit
// since we have not gotten into the loop yet.
let guess = parseInt(prompt("Enter your first guess!"));
// Initial counter to see how many guesses it takes
let attempts = 1;

// While loop repeats until user guesses the targetNum generated
while (parseInt(guess) !== targetNum) {
    // Method for user to quit game. Uses break :o!
    if (guess === 'q') break;
    attempts++;
    // Tells user if guess was too low or too high
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    } else {
        guess = prompt("Too low! Enter a new guess:");
    }
}

// Provides text if user quits (by inputting 'q') or wins game!
if (guess === 'q') {
    console.log("OK, YOU QUIT!")
} else {
    console.log("CONGRATS YOU WIN!")
    console.log(`You got it! It took you ${attempts} guesses`)
}