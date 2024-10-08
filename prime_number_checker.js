const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }

    return true;
}

rl.question("Enter a number to check if it's prime: ", (input) => {
    const num = parseInt(input, 10);
    console.log(`${num} is ${isPrime(num) ? 'a prime number' : 'not a prime number'}.`);
    rl.close();
});
