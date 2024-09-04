const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fibonacciSequence(n) {
    let a = 0, b = 1;
    let sequence = [];

    for (let i = 0; i < n; i++) {
        sequence.push(a);
        const next = a + b;
        a = b;
        b = next;
    }

    console.log("Fibonacci Sequence:", sequence.join(' '));
}

rl.question("Enter the number of Fibonacci terms to generate: ", (input) => {
    const terms = parseInt(input, 10);
    fibonacciSequence(terms);
    rl.close();
});
