const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tasks = [];

function displayTasks() {
    console.log("Tasks:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

function todoListApp() {
    function mainMenu() {
        rl.question("1. Add Task\n2. Display Tasks\n3. Exit\nEnter your choice: ", (choice) => {
            switch (choice) {
                case '1':
                    rl.question("Enter task description: ", (task) => {
                        tasks.push(task);
                        mainMenu();
                    });
                    break;
                case '2':
                    displayTasks();
                    mainMenu();
                    break;
                case '3':
                    console.log("Exiting...");
                    rl.close();
                    break;
                default:
                    console.log("Invalid choice. Please try again.");
                    mainMenu();
                    break;
            }
        });
    }

    mainMenu();
}

todoListApp();
