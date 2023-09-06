// Calculate Here

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

// operate(1, "+", 1);
// operate(2, "-", 1);
// operate(5, "*", 7);
// operate(81, "/", 9);

const displayTxt = document.querySelector(".display-txt");
const numBtns = document.querySelectorAll(".num-btn");
numBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (operator === undefined) {
            firstNumber = parseInt(btn.textContent);
            console.log(`First Number: ${firstNumber}`);
        } else {
            secondNumber = parseInt(btn.textContent);
            console.log(`Second Number: ${secondNumber}`);
        }
        displayTxt.textContent = btn.textContent;
        // console.log(e);
    });
});

const opBtns = document.querySelectorAll(".op-btn");
opBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (firstNumber !== undefined && secondNumber === undefined) {
            operator = btn.textContent;
            console.log(`Operator: ${operator}`);
        }
    });
});

const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', () => {
    displayTxt.textContent = "0";
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
});

const equalBtn = document.querySelector('#eq-btn');
equalBtn.addEventListener('click', () => {
    result = operate(firstNumber, operator, secondNumber);
    firstNumber = result;
    displayTxt.textContent = firstNumber;
    secondNumber = undefined;
    operator = undefined;
});





// =====================================================

// const additionOperation = function add(a, b) {
//     return a + b;
// }

// const subtractionOperation = function subtract(a, b) {
//     return a - b;
// }

// const multiplicationOperation = function multiply(a, b) {
//     return a * b;
// }

// const divisionOperation = function divide(a, b) {
//     return a / b;
// }

// module.exports = additionOperation, subtractionOperation, multiplicationOperation, divisionOperation;

