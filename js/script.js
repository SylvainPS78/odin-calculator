//function Calculator() {
    this.methods = {
        "+": (a,b) => a + b,
        "-": (a,b) => a - b,
        "/": (a,b) => a / b,
        "*": (a,b) => a * b,
    }

    this.calculate = function(str) {
        let split = str.split(" ");
        a = +split[0];
        op = split[1];
        b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN // Changer le message d'erreur
        }

        return this.methods[op](a,b);
    }
//}
//let userInput = prompt("entrer une formule");
//let myCalculator = new Calculator();
//console.log(myCalculator.calculate(userInput));



function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

let number1 = parseFloat(prompt("Nombre 1 ?"));
let operator = prompt("Opérateur ?");
let number2 = parseFloat(prompt("Nombre 2 ?"));


function operate(op,a,b){
    if (op === "+"){return add(a,b)}
    else if (op === "-"){return subtract(a,b)}
    else if (op === "/"){return divide(a,b)}
    else if (op === "*"){return multiply(a,b)}
}

console.log(operate(operator,number1,number2));


