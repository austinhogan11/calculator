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
            break;
        case "-":
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${subtract(firstNumber, secondNumber)}`)
            break;
        case "*":
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${multiply(firstNumber, secondNumber)}`)
            break;
        case "/":
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${divide(firstNumber, secondNumber)}`)
            break;
        default:
            console.log("I'm not programmed to handle that yet.")
    }
}

operate(1, "+", 1);
operate(2, "-", 1);
operate(5, "*", 7);
operate(81, "/", 9);


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

