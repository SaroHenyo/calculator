let firstNumber;
let secondNumber;
let operation;
let sum;
let x;
let y;
let z;
let result;

console.log(firstNumber, operation, secondNumber);

function hello() {
    console.log("Hello, World!");
}

function clickNumber(input) {
    if (operation === undefined) {
        if (firstNumber === undefined) {
            firstNumber = String(input);
        } else {
            firstNumber = String(firstNumber) + String(input);
        }
    } else {
        if (secondNumber === undefined) {
            secondNumber = String(input);
        } else {
            secondNumber = String(secondNumber) + String(input);
        }
    }

    console.log(firstNumber, operation, secondNumber);
}

function clickOperation(input) {
    switch (input) {
        case '+': {
            operation = '+';
            break;
        }
        case '*': {
            operation = '*';
            break;
        }
        case '-': {
            operation = '-';
            break;
        }
        case '/': {
            operation = '/';
            break;
        }
        case '=': {
            sum = Number(firstNumber) + Number(secondNumber);
            console.log(sum);
            firstNumber = undefined;
            secondNumber = undefined;
            operation = undefined;
            break;
        }
        default: {
            console.log("Unknown operation: " + input);
        }
    }
    
    console.log(firstNumber, operation, secondNumber);
}