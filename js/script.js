const buttons = document.querySelector("#buttons");
const tempDisplay = document.querySelector("#temp-display");
const mainDisplay = document.querySelector("#main-display");
let operatorUsed = 0;
let maxDisplay = 11; /*Taille max des nombres sur l'écran*/
const regex = /[+\-/x=]/;

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
            tempDisplay.textContent += "-"; //A COMPLETER
            break;
        case ",":
            tempDisplay.textContent += ".";
            break;
        // Mettre un 0 en début de ligne si j'appuie sur un opérateur alors que tempDisplay est vide
        case "%":
            if (tempDisplay.textContent[tempDisplay.textContent.length - 2]=="="){
                tempDisplay.textContent = mainDisplay.textContent + " / ";
                break;
            }
            if (operatorUsed >= 1) {
                mainDisplay.textContent = calculateResult(tempDisplay.textContent);
                tempDisplay.textContent = mainDisplay.textContent;
            }
            tempDisplay.textContent += " / ";
            operatorUsed += 1;
            break;
        case "x":
            if (tempDisplay.textContent[tempDisplay.textContent.length - 2]=="="){
                tempDisplay.textContent = mainDisplay.textContent + " x ";
                break;
            }
            if (operatorUsed >= 1) {
                mainDisplay.textContent = calculateResult(tempDisplay.textContent);
                tempDisplay.textContent = mainDisplay.textContent;
            }
            tempDisplay.textContent += " x ";
            operatorUsed += 1;
            break;
        case "-":
            if (tempDisplay.textContent[tempDisplay.textContent.length - 2]=="="){
                tempDisplay.textContent = mainDisplay.textContent + " - ";
                break;
            }
            if (operatorUsed >= 1) {
                mainDisplay.textContent = calculateResult(tempDisplay.textContent);
                tempDisplay.textContent = mainDisplay.textContent;
            }
            tempDisplay.textContent += " - ";
            operatorUsed += 1;
            break;
        case "+":
            if (tempDisplay.textContent[tempDisplay.textContent.length - 2]=="="){
                tempDisplay.textContent = mainDisplay.textContent + " + ";
                break;
            }
            if (operatorUsed >= 1) {
                mainDisplay.textContent = calculateResult(tempDisplay.textContent);
                tempDisplay.textContent = mainDisplay.textContent;
            }
            tempDisplay.textContent += " + ";
            operatorUsed += 1;
            break;
        case "=":
            if (tempDisplay.textContent[tempDisplay.textContent.length - 2]=="=" ||
                tempDisplay.textContent === "")
                 {break}
            mainDisplay.textContent = calculateResult(tempDisplay.textContent);
            tempDisplay.textContent += " = ";
            break;
        case "C":
            mainDisplay.textContent = "0";
            tempDisplay.textContent = "";
            operatorUsed=0;
    }
    //programmer les boutons manquants
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

