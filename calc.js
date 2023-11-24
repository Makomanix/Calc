const screen = document.querySelector('.screen');
let display = '0'
let saved = ''

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

function handleSymbol(symbol) {
    // saved = display;

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
            console.log("equals");
            break;

        case "+":            
        case "-":           
        case "x":           
        case "÷":
            console.log("maths");
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