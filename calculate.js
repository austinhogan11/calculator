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

function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case "+":
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${add(firstNumber, secondNumber)}`)
            return add(firstNumber, secondNumber);
        case "-":
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${subtract(firstNumber, secondNumber)}`)
            return subtract(firstNumber, secondNumber)
        case "*":
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${multiply(firstNumber, secondNumber)}`)
            return multiply(firstNumber, secondNumber)
        case "/":
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${divide(firstNumber, secondNumber)}`)
            return divide(firstNumber, secondNumber)
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
            console.log(`Buffer: ${buffer}`)
            firstNumber = parseInt(buffer.join(''));
            displayTxt.textContent = firstNumber;
        } else {
            buffer.push(btn.textContent);
            console.log(`Buffer: ${buffer}`)
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
            console.log(`Operator: ${operator}`);
            console.log(`Buffer: ${buffer}`)
        } else {
            processEquals();
            operator = btn.textContent;
            console.log(`Operator: ${operator}`);
            console.log(`Buffer: ${buffer}`)
        }
    });
});

const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', () => {
    displayTxt.textContent = "0";
    buffer = [];
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
});

function processEquals() {
    result = operate(firstNumber, operator, secondNumber);
    displayTxt.textContent = result;
    buffer = [];
    firstNumber = result;
    secondNumber = undefined;
    operator = undefined;
}
const equalBtn = document.querySelector('#eq-btn');
equalBtn.addEventListener('click', () => {
    processEquals();
});



