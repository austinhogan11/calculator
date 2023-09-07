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

function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            if (secondNumber !== 0) {
                return divide(firstNumber, secondNumber);
            } else {
                console.log("Cannot divide by zero!!!")
                return 0;
            }

        default:
            console.log("I'm not programmed to handle that yet.")
    }
}

const displayTxt = document.querySelector(".display-txt");
const numBtns = document.querySelectorAll(".num-btn");
numBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (operator === undefined) {
            buffer.push(btn.textContent);
            firstNumber = parseInt(buffer.join(''));
            displayTxt.textContent = firstNumber;
        } else {
            buffer.push(btn.textContent);
            secondNumber = parseInt(buffer.join(''));
            displayTxt.textContent = secondNumber;
        }
    });
});

const opBtns = document.querySelectorAll(".op-btn");
opBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (firstNumber !== undefined && secondNumber === undefined) {
            buffer = [];
            operator = btn.textContent;
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
}

const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', clearCalculator);

function processEquals() {
    result = operate(parseInt(firstNumber), operator, parseInt(secondNumber));
    clearCalculator();
    displayTxt.textContent = result;
    firstNumber = result;
}

const equalBtn = document.querySelector('#eq-btn');
equalBtn.addEventListener('click', processEquals);

const delBtn = document.querySelector('#del-btn');
delBtn.addEventListener('click', () => {
    buffer.pop();
});

