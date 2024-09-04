const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function guessTheNumber() {
    const number = Math.floor(Math.random() * 100) + 1;

    function askGuess() {
        rl.question("Guess the number between 1 and 100: ", (input) => {
            const guess = parseInt(input, 10);

            if (guess > number) {
                console.log("Too high! Try again.");
                askGuess();
            } else if (guess < number) {
                console.log("Too low! Try again.");
                askGuess();
            } else {
                console.log("Congratulations! You guessed it right.");
                rl.close();
            }
        });
    }

    askGuess();
}

guessTheNumber();
