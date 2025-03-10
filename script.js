let display = document.getElementById("display");
let currentInput = "";

// Append number or operator to display
function appendToDisplay(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
    currentInput = display.innerText;
}

// Clear display
function clearDisplay() {
    display.innerText = "0";
    currentInput = "";
}

// Calculate result
function calculateResult() {
    try {
        display.innerText = eval(currentInput);
        currentInput = display.innerText;
    } catch {
        display.innerText = "Error";
        currentInput = "";
    }
}
