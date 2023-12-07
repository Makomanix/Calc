let buffer = '0';
let memory = 0;
let lastOperator = ''
let equal = false;

function handleClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    };
};

function handleNumber(number) {
    if (buffer === '0' || equal === true) {
        buffer = number;
        equal = false;
    } else {
        buffer += number;        
    };

    rerender();
};

function handleMaths(symbol) {
    if (buffer === '0') {
        return;
    };

    let intBuffer = parseInt(buffer);
    if (memory === 0) {
        memory = intBuffer;
    } else {
        flushOperator(intBuffer);
    };
    
    rerender();
    lastOperator = symbol;
    buffer = '0';
};

function flushOperator(intBuffer) {
    if (lastOperator === "+") {
        memory += intBuffer;
    } else if (lastOperator === "-") {
        memory -= intBuffer;
    } else if (lastOperator === "x") {
        memory *= intBuffer
    } else if (lastOperator === "÷") {
        memory /= intBuffer;
    }
};

function handleSymbol(symbol) {
    switch (symbol) {
        case "C":
            buffer = "0";
            memory = 0;
            lastOperator = '';
            equal = false;
            rerender();
            break;

        case "←":
            if(buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            };
            equal = false;
            rerender();
            break;

        case "=":
            if (lastOperator === null) {

                return;
            };
            
            if (equal) {
                handleMaths(lastOperator);
            } else {

                flushOperator(parseInt(buffer));
                equal = true
                buffer = "" + memory;
                memory = 0;
            };

            rerender();
            break;

        case "+":
        case "-":
        case "x":
        case "÷":
            handleMaths(symbol);
            equal = false;
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