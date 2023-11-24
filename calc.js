const screen = document.querySelector('.screen');
let display = '0'
let currentTotal = 0;
let lastOperator;

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    updateDisplay();
};

function handleNumber(number) {
    if (display === '0') {
        display = number;
    } else {
        display += number;
    }
};

function handleMath(value) {
    if (display === "0") {
        return;
    }

    const intDisplay = parseInt(display);
    if (currentTotal === 0) {
        currentTotal = intDisplay;
    } else {
        useOperator(intDisplay)
    }

    lastOperator = value;
    display = '0';
    
};

function useOperator(intDisplay) {
    if (lastOperator === '+') {
        currentTotal += intDisplay
    } else if (lastOperator === '-') {
        currentTotal -= intDisplay
    } else if (lastOperator === "x") {
      currentTotal *= intDisplay;
    } else if (lastOperator === "÷") {
        currentTotal /= intDisplay;
    }
    
}

function handleSymbol(symbol) {

    switch(symbol) {
        case "C":
            display = "0";
            break;

        case "←":
            if (display.length === 1) {
                display = "0"
            } else {
                display = display.substring(0, display.length - 1);
            };
            break;

        case "=":
            if (lastOperator === null) {
                return;
            }
            useOperator(parseInt(display));
            lastOperator = null;
            display = "" + currentTotal;
            currentTotal = 0;
            break;

        case "+":            
        case "-":           
        case "x":           
        case "÷":
            handleMath(symbol);
            break;
    }
};


function init() {
    document.querySelector(".calc-buttons")
    .addEventListener('click', function(e){
        buttonClick(e.target.innerText)
    })
};

function updateDisplay() {
    screen.innerText = display
};

init();