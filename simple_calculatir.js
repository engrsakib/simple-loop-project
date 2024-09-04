const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function simpleCalculator() {
    rl.question("Enter operator (+, -, *, /): ", (operation) => {
        rl.question("Enter first number: ", (num1) => {
            rl.question("Enter second number: ", (num2) => {
                const number1 = parseFloat(num1);
                const number2 = parseFloat(num2);
                let result;

                switch (operation) {
                    case '+':
                        result = number1 + number2;
                        break;
                    case '-':
                        result = number1 - number2;
                        break;
                    case '*':
                        result = number1 * number2;
                        break;
                    case '/':
                        result = number2 !== 0 ? number1 / number2 : "Error! Division by zero.";
                        break;
                    default:
                        result = "Error! Operator not recognized.";
                        break;
                }

                console.log(`Result: ${result}`);
                rl.close();
            });
        });
    });
}

simpleCalculator();
