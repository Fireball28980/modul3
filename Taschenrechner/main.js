let currentInput = 0;
let previousInput = 0;
let operator = "+";
let verlauf = "";

function press(zahl) {
  if (operator === "=") {
    previousInput = 0;
    currentInput = 0;
    operator = "+";
    updatePreviousInput(previousInput + operator);
    updateCurrentInput(currentInput);
  }
  currentInput = currentInput * 10 + zahl;
  console.log(currentInput);
  updateCurrentInput(currentInput);
}

function add() {
  performOperator();
  operator = "+";
}

function sutract() {
  performOperator();
  operator = "-";
}

function multiply() {
  performOperator();
  operator = "*";
}

function divide() {
  performOperator();
  operator = "/";
}

function enter() {
  performOperator();
  operator = "=";
  updateCurrentInput(previousInput);
}

function reset() {
  currentInput = 0;
  previousInput = 0;
  verlauf = "";
  updateCurrentInput(currentInput);
  updatePreviousInput(previousInput);
  updateVerlauf();
}

function performOperator() {
  let currentResult = 0;
  if (operator === "+") {
    currentResult = previousInput + currentInput;
  } else if (operator === "-") {
    currentResult = previousInput - currentInput;
  } else if (operator === "*") {
    currentResult = previousInput * currentInput;
  } else if (operator === "/") {
    currentResult = previousInput / currentInput;
  }
  if (operator !== "=") {
    let verlaufstring =
      "<P>" +
      previousInput +
      operator +
      currentInput +
      "=" +
      currentResult +
      "</P>";
    verlauf = verlaufstring + verlauf;
    console.log("verlauf");
    updateVerlauf();
  }
  previousInput = currentResult;
  currentInput = 0;
  updatePreviousInput(previousInput + operator);
  updateCurrentInput(currentInput);
}
function updateCurrentInput(text) {
  document.getElementById("eingabe").innerHTML = text;
}

function updatePreviousInput(text) {
  document.getElementById("zwischensumme").innerHTML = text;
}

function updateVerlauf() {
  document.getElementById("verlauf").innerHTML = verlauf;
}
