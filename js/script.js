const buttons = document.querySelector("#buttons");
const tempDisplay = document.querySelector("#temp-display");
const mainDisplay = document.querySelector("#main-display");
let operatorUsed = 0;
const maxDisplay = 11; /*Taille max des nombres sur l'écran*/
let dotCount = 0;
const regexOperator = /[+\-/x]/;

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

function equal(a) {
    return a;
}

buttons.addEventListener("click", (event) => {
    const target = event.target;
    let buttonValue ="";

    if (target.classList.contains("button")) {
        buttonValue = target.textContent;
    }

    handleButtonClick(buttonValue);
});


function handleButtonClick(value) {
    switch (value){
        case "0":
            if (tempDisplay.textContent[tempDisplay.textContent.length - 2]=="="){
                mainDisplay.textContent = "0";
                tempDisplay.textContent = "";
                operatorUsed=0;
            }
            tempDisplay.textContent += 0;
            break;
        case "1":
            if (tempDisplay.textContent[tempDisplay.textContent.length - 2]=="="){
                mainDisplay.textContent = "0";
                tempDisplay.textContent = "";
                operatorUsed=0;
            }
            tempDisplay.textContent += 1;
            break;
        case "2":
            if (tempDisplay.textContent[tempDisplay.textContent.length - 2]=="="){
                mainDisplay.textContent = "0";
                tempDisplay.textContent = "";
                operatorUsed=0;
            }
            tempDisplay.textContent += 2;
            break;
        case "3":
            if (tempDisplay.textContent[tempDisplay.textContent.length - 2]=="="){
                mainDisplay.textContent = "0";
                tempDisplay.textContent = "";
                operatorUsed=0;
            }
            tempDisplay.textContent += 3;
            break;
        case "4":
            if (tempDisplay.textContent[tempDisplay.textContent.length - 2]=="="){
                mainDisplay.textContent = "0";
                tempDisplay.textContent = "";
                operatorUsed=0;
            }
            tempDisplay.textContent += 4;
            break;
        case "5":
            if (tempDisplay.textContent[tempDisplay.textContent.length - 2]=="="){
                mainDisplay.textContent = "0";
                tempDisplay.textContent = "";
                operatorUsed=0;
            }
            tempDisplay.textContent += 5;
            break;
        case "6":
            if (tempDisplay.textContent[tempDisplay.textContent.length - 2]=="="){
                mainDisplay.textContent = "0";
                tempDisplay.textContent = "";
                operatorUsed=0;
            }
            tempDisplay.textContent += 6;
            break;
        case "7":
            if (tempDisplay.textContent[tempDisplay.textContent.length - 2]=="="){
                mainDisplay.textContent = "0";
                tempDisplay.textContent = "";
                operatorUsed=0;
            }
            tempDisplay.textContent += 7;
            break;
        case "8":
            if (tempDisplay.textContent[tempDisplay.textContent.length - 2]=="="){
                mainDisplay.textContent = "0";
                tempDisplay.textContent = "";
                operatorUsed=0;
            }
            tempDisplay.textContent += 8;
            break;
        case "9":
            if (tempDisplay.textContent[tempDisplay.textContent.length - 2]=="="){
                mainDisplay.textContent = "0";
                tempDisplay.textContent = "";
                operatorUsed=0;
            }
            tempDisplay.textContent += 9;
            break;
        case "+/-":
            if (operatorUsed == 0){
                if (tempDisplay.textContent[0]==="-") {
                    tempDisplay.textContent = tempDisplay.textContent.slice(1);
                    break;
                }
                else {tempDisplay.textContent = "-" + tempDisplay.textContent;
                    break;
                }
            }
            else if (operatorUsed > 0 && tempDisplay.textContent[tempDisplay.textContent.length - 2]!=="=") {
                let tempString = tempDisplay.textContent.split(" ");
                let num1 = tempString[0];
                let operator = tempString[1];
                let num2 = tempString[2];
                tempDisplay.textContent = `${num1} ${operator} ${-num2}`;
                break;
            }
            else {
                if (mainDisplay.textContent[0]==="-") {
                    mainDisplay.textContent = mainDisplay.textContent.slice(1);
                    break;
                }
                else {mainDisplay.textContent = "-" + mainDisplay.textContent;
                    break;
                }
            }
            break;
        case ",":
            if (tempDisplay.textContent[tempDisplay.textContent.length - 2]=="="){
                mainDisplay.textContent = "0";
                tempDisplay.textContent = "";
                operatorUsed=0;
                dotCount=0;
            }
            if (tempDisplay.textContent === "") {
                tempDisplay.textContent += 0;
            };
            if (tempDisplay.textContent[tempDisplay.textContent.length - 1] ==" "){
                let tempString = tempDisplay.textContent.split(" ");
                let num1 = tempString[0];
                let operator = tempString[1];
                tempDisplay.textContent = `${num1} ${operator} 0.`;
                break;
            }
            if (tempDisplay.textContent[tempDisplay.textContent.length-1] !=="." && dotCount < 1){
                tempDisplay.textContent += ".";
                dotCount++;
                break;
            }
            else {
                break;
            }
            break;
        case "%":
            if (tempDisplay.textContent[tempDisplay.textContent.length - 2]=="="){
                tempDisplay.textContent = mainDisplay.textContent + " / ";
                break;
            }
            if (/[0-9\.]/.test(tempDisplay.textContent[tempDisplay.textContent.length - 1]) && operatorUsed >=1 ){
                mainDisplay.textContent = calculateResult(tempDisplay.textContent);
                tempDisplay.textContent = mainDisplay.textContent + " / ";
                dotCount=0;
                break;
            }
            if (regexOperator.test(tempDisplay.textContent[tempDisplay.textContent.length - 2])) {
                tempDisplay.textContent = tempDisplay.textContent.slice(0,tempDisplay.textContent.length-3)
            }
            tempDisplay.textContent += " / ";
            dotCount=0;
            operatorUsed += 1;
            break;
        case "x":
            if (tempDisplay.textContent[tempDisplay.textContent.length - 2]=="="){
                tempDisplay.textContent = mainDisplay.textContent + " x ";
                break;
            }
            if (/[0-9\.]/.test(tempDisplay.textContent[tempDisplay.textContent.length - 1]) && operatorUsed >=1 ){
                mainDisplay.textContent = calculateResult(tempDisplay.textContent);
                tempDisplay.textContent = mainDisplay.textContent + " x ";
                dotCount=0;
                break;
            }
            if (regexOperator.test(tempDisplay.textContent[tempDisplay.textContent.length - 2])) {
                tempDisplay.textContent = tempDisplay.textContent.slice(0,tempDisplay.textContent.length-3)
            }
            tempDisplay.textContent += " x ";
            dotCount=0;
            operatorUsed += 1;
            break;
        case "-":
            if (tempDisplay.textContent[tempDisplay.textContent.length - 2]=="="){
                tempDisplay.textContent = mainDisplay.textContent + " - ";
                break;
            }
            if (/[0-9\.]/.test(tempDisplay.textContent[tempDisplay.textContent.length - 1]) && operatorUsed >=1 ){
                mainDisplay.textContent = calculateResult(tempDisplay.textContent);
                tempDisplay.textContent = mainDisplay.textContent + " - ";
                dotCount=0;
                break;
            }
            if (regexOperator.test(tempDisplay.textContent[tempDisplay.textContent.length - 2])) {
                tempDisplay.textContent = tempDisplay.textContent.slice(0,tempDisplay.textContent.length-3)
            }
            tempDisplay.textContent += " - ";
            operatorUsed += 1;
            dotCount=0;
            break;
        case "+":
            if (tempDisplay.textContent[tempDisplay.textContent.length - 2]=="="){
                tempDisplay.textContent = mainDisplay.textContent + " + ";
                operatorUsed += 1;
                break;
            }
            if (/[0-9\.]/.test(tempDisplay.textContent[tempDisplay.textContent.length - 1]) && operatorUsed >=1 ){
                mainDisplay.textContent = calculateResult(tempDisplay.textContent);
                tempDisplay.textContent = mainDisplay.textContent + " + ";
                dotCount=0;
                break;
            }
            if (regexOperator.test(tempDisplay.textContent[tempDisplay.textContent.length - 2])) {
                tempDisplay.textContent = tempDisplay.textContent.slice(0,tempDisplay.textContent.length-3)
            }
            tempDisplay.textContent += " + ";
            dotCount=0;
            operatorUsed += 1;
            break;
        case "=":
            if (tempDisplay.textContent[tempDisplay.textContent.length - 2]=="=" ||
                tempDisplay.textContent === "")
                 {break}
            mainDisplay.textContent = calculateResult(tempDisplay.textContent);
            tempDisplay.textContent += " = ";
            operatorUsed = 0;
            dotCount=0;
            break;
        case "C":
            mainDisplay.textContent = "0";
            tempDisplay.textContent = "";
            operatorUsed=0;
            dotCount=0;
        case "DEL":
            if (/[0-9]/.test(tempDisplay.textContent[tempDisplay.textContent.length - 1])){
                tempDisplay.textContent=tempDisplay.textContent.slice(0,tempDisplay.textContent.length-1);
                break;
            }
            else if (/[\.\-]/.test(tempDisplay.textContent[tempDisplay.textContent.length - 1])){
                tempDisplay.textContent=tempDisplay.textContent.slice(0,tempDisplay.textContent.length-1);
                dotCount=0;
                break;}
    }
}

function operate(op,a,b){
    if (b==""){
        b = a;
        tempDisplay.textContent += b;
    }
    if (op === "+"){return add(a,b)}
    else if (op === "-"){return subtract(a,b)}
    else if (op === "/"){return divide(a,b)}
    else if (op === "x"){return multiply(a,b)}
    else if (op === "="){return equal(a)}
}

function calculateResult(str) {
    let splitStr = str.split(" ");
    a = +splitStr[0];
    op = splitStr[1];
    b = +splitStr[2]; 

    if (op === "/" && b === 0) {
        return "Error: div/0";
    }

    let result = operate(op,a,b);
    let resultStr = result.toString();
    if (resultStr.length > maxDisplay) {
        resultStr = resultStr.slice(0,maxDisplay)
    }
    return resultStr;
}

