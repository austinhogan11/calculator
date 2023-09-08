function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let buffer = [];
let firstNumber;
let secondNumber;
let operator;
let onFirstNumber = true;
let onSecondNumber = false;
let currentNumber = 0;

const displayTxt = document.querySelector(".display-txt");
const numBtns = document.querySelectorAll(".num-btn");
const decimalBtn = document.querySelector(".decimal");
const opBtns = document.querySelectorAll(".op-btn");
const clearBtn = document.querySelector('#clear-btn');
const equalBtn = document.querySelector('#eq-btn');

function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case "+":
            return formatDecimals(add(firstNumber, secondNumber));
        case "-":
            return formatDecimals(subtract(firstNumber, secondNumber));
        case "×":
            return formatDecimals(multiply(firstNumber, secondNumber));
        case "÷":
            if (secondNumber !== 0) {
                return formatDecimals(divide(firstNumber, secondNumber));
            } else {
                console.log("Cannot divide by zero!!!");
                return 0;
            }
        default:
            console.log("I'm not programmed to handle that yet.");
            return 0;
    }
}

function buildCurrentNumber(btn) {
    if (buffer.length < 9) {
        buffer.push(btn.textContent);
        console.log(`Buffer: ${buffer}`)
        currentNumber = parseFloat(buffer.join(''));
        console.log(`Current Number: ${currentNumber}`)
        displayTxt.textContent = currentNumber;
        return currentNumber;
    }
}

function clearCalculator() {
    displayTxt.textContent = "0";
    buffer = [];
    firstNumber = undefined;
    secondNumber = undefined;
    currentNumber = 0;
    operator = undefined;
    onFirstNumber = true;
    onSecondNumber = false;
    console.log(`Cleared Calculator`)
    console.log(`First Number: ${firstNumber} Second Number: ${firstNumber} Current Number: ${currentNumber} Operator: ${operator}`)
}

function processEquals() {
    if (secondNumber !== undefined) {
        result = operate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
        console.log(`Processed Equals - Result: ${result}`);
        clearCalculator();
        displayTxt.textContent = result;
        firstNumber = result;
        console.log(`First Number: ${firstNumber} Second Number: ${firstNumber} Current Number: ${currentNumber} Operator: ${operator}`)

    }
}

function formatDecimals(num) {
    return parseFloat(num.toString().slice(0, 9));
}

clearBtn.addEventListener('click', clearCalculator);
equalBtn.addEventListener('click', processEquals);

opBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(btn.textContent);
        if (firstNumber !== undefined && secondNumber === undefined) {
            buffer = [];
            operator = btn.textContent;
            onFirstNumber = false;
            onSecondNumber = true;
            console.log(`Operator: ${operator}`);
            console.log("On second number");
        } else {
            processEquals();
            operator = btn.textContent;
            console.log(`Operator: ${operator}`);
            console.log("On second number");
        }
    });
});

decimalBtn.addEventListener('click', () => {
    if (!buffer.includes(".")) {
        if (onFirstNumber) {
            firstNumber = buildCurrentNumber(decimalBtn);
            console.log(`First Number: ${firstNumber}`);
        } else {
            secondNumber = buildCurrentNumber(decimalBtn)
            console.log(`Second Number: ${secondNumber}`);
        }
    }
});

numBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (onFirstNumber) {
            firstNumber = buildCurrentNumber(btn);
            console.log(`First Number: ${firstNumber}`);
        } else {
            secondNumber = buildCurrentNumber(btn);
            console.log(`Second Number: ${secondNumber}`);
        }
    });
});