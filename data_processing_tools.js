function dataProcessingTool() {
    const data = [10, 20, 30, 40, 50]; // Example data
    const sum = data.reduce((acc, num) => acc + num, 0);
    const average = sum / data.length;

    console.log(`Sum: ${sum}`);
    console.log(`Average: ${average}`);
}

dataProcessingTool();
