let firstNumber;
let secondNumber;
let operation;
let display = document.getElementById("display");

console.log(firstNumber, operation, secondNumber);
// Clear Button to Zero
let clearMemoryButton = document.getElementById("clearMemoryButton");
clearMemoryButton.addEventListener("click", clearMemory);
// Operation Numbers
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
// Operation Numbers
function clickOperation(input) {
    switch (input) {
        case "*": {
            operation = "*";
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
// Switch Plus Minus
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
// Percentage
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
// Clear C Function
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
// Calculate
function calculate() {
    let result;
    switch (operation) {
        case "*": {
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
// Display Number
function updateDisplay(number) {
    number = Number(number).toLocaleString();
    display.innerText = number;
}
// Digital Clock
function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
     let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  
  currentTime();