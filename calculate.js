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

function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case "+":
            return formatDecimals(add(firstNumber, secondNumber));
        case "-":
            return formatDecimals(subtract(firstNumber, secondNumber));
        case "×":
            console.log(operator)
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

const displayTxt = document.querySelector(".display-txt");
const numBtns = document.querySelectorAll(".num-btn");
numBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (buffer.length < 9) {
            if (onFirstNumber) {
                firstNumber = buildCurrentNumber(btn);
            } else {
                secondNumber = buildCurrentNumber(btn);
            }
        }
    });
});

function buildCurrentNumber(btn) {
    buffer.push(btn.textContent);
    console.log(`Buffer: ${buffer}`);
    currentNumber = parseFloat(buffer.join(''));
    console.log(`firstNumber: ${currentNumber}`);
    displayTxt.textContent = currentNumber;
    return currentNumber;
}

const decimalBtn = document.querySelector(".decimal");
decimalBtn.addEventListener('click', () => {
    if (!buffer.includes(".")) {
        buffer.push(decimalBtn.textContent);
        console.log(`Buffer: ${buffer}`);
        if (onFirstNumber) {
            firstNumber = parseFloat(buffer.join(''));
            console.log(`firstNumber: ${firstNumber}`);
            displayTxt.textContent = firstNumber;
        } else {
            secondNumber = parseFloat(buffer.join(''));
            console.log(`secondNumber: ${secondNumber}`);
            displayTxt.textContent = secondNumber;
        }
    }
});

const opBtns = document.querySelectorAll(".op-btn");
opBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(btn.textContent);
        if (firstNumber !== undefined && secondNumber === undefined) {
            buffer = [];
            operator = btn.textContent;
            onFirstNumber = false;
            onSecondNumber = true;
        } else {
            processEquals();
            operator = btn.textContent;
        }
    });
});

function clearCalculator() {
    displayTxt.textContent = "0";
    buffer = [];
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    onFirstNumber = true;
    onSecondNumber = false;
}

const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', clearCalculator);

function processEquals() {
    if (secondNumber !== undefined) {
        result = operate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
        clearCalculator();
        displayTxt.textContent = result;
        firstNumber = result;
    }
}

const equalBtn = document.querySelector('#eq-btn');
equalBtn.addEventListener('click', processEquals);

// const delBtn = document.querySelector('#del-btn');
// delBtn.addEventListener('click', () => {
//     buffer.pop();
// });

function formatDecimals(num) {
    return parseFloat(num.toString().slice(0, 9));
}

// const pmBtn = document.querySelector('#pm-btn');
// pmBtn.addEventListener('click', changeSign);

// function changeSign() {}

