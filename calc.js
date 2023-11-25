let buffer = '0';

function handleClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    };
};

function handleNumber(number) {
    if (buffer === '0') {
        buffer = number;
    } else {
        buffer += number;
    };

    rerender();
};


function handleSymbol(symbol) {
    switch (symbol) {
        case "C":
            buffer = "0"
            rerender();
            break;
        case "←":
            break;
        case "=":
            break;
        case "+":
        case "-":
        case "x":
        case "÷":
            break;
    }
    
};

function init() {
    document
    .querySelector('.calc-buttons')
    .addEventListener('click', function(e) {
        handleClick(e.target.innerText)
    })
};

function rerender() {
    document
    .querySelector('.screen')
    .innerText = buffer
};

init();