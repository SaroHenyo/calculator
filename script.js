let firstNumber;
let secondNumber;
let operation;
let display = document.getElementById("display");

console.log(firstNumber, operation, secondNumber);

let clearMemoryButton = document.getElementById("clearMemoryButton");
clearMemoryButton.addEventListener("click", clearMemory);

function clickNumber(input) {
    if (operation === undefined) {
        if (firstNumber === undefined) {
            firstNumber = String(input);
        } else {
            firstNumber = String(firstNumber) + String(input);
        }
        updateDisplay(firstNumber);
    } else {
        if (secondNumber === undefined) {
            secondNumber = String(input);
        } else {
            secondNumber = String(secondNumber) + String(input);
        }
        updateDisplay(secondNumber);
    }

    console.log(firstNumber, operation, secondNumber);
}

function clickOperation(input) {
    switch (input) {
        case "x": {
            operation = "x";
            break;
        }
        case "/": {
            operation = "/";
            break;
        }
        case "+": {
            operation = "+";
            break;
        }
        case "-": {
            operation = "-";
            break;
        }
        case "=": {
            calculate();
            break;
        }
        default: {
            console.log("Unknown operation: " + input);
        }
    }
    
    console.log(firstNumber, operation, secondNumber);
}

function switchSign() {
    if (operation === undefined) {
        firstNumber = Number(firstNumber);
        firstNumber = -1 * firstNumber;
        firstNumber = String(firstNumber)
        updateDisplay(firstNumber);
    } else {
        secondNumber = Number(secondNumber);
        secondNumber = -1 * secondNumber;
        secondNumber = String(secondNumber)
        updateDisplay(secondNumber);
    }
}

function switchToPercent() {
    if (operation === undefined) {
        firstNumber = Number(firstNumber);
        firstNumber = firstNumber / 100;
        firstNumber = String(firstNumber)
        updateDisplay(firstNumber);
    } else {
        secondNumber = Number(secondNumber);
        secondNumber = secondNumber / 100;
        secondNumber = String(secondNumber)
        updateDisplay(secondNumber);
    }
}

function clearMemory() {
    if (firstNumber === undefined
        && secondNumber === undefined
        && operation === undefined
    ) {
        updateDisplay(0);
    }
    firstNumber = undefined;
    secondNumber = undefined;
    operation = undefined;

    console.log(firstNumber, operation, secondNumber);
}

function calculate() {
    let result;
    switch (operation) {
        case "x": {
            result = Number(firstNumber) * Number(secondNumber);
            break;
        }
        case "/": {
            result = Number(firstNumber) / Number(secondNumber);
            operation = "/";
            break;
        }
        case "+": {
            result = Number(firstNumber) + Number(secondNumber);
            break;
        }
        case "-": {
            result = Number(firstNumber) - Number(secondNumber);
            break;
        }
    }
    console.log(result);
    updateDisplay(result);
    clearMemory();
}

function updateDisplay(number) {
    number = Number(number).toLocaleString();
    display.innerText = number;
}