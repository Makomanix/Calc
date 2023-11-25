let buffer = '0';
let memory = '0';
let lastOperator = ''

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

function handleMaths(symbol) {
    flushOperator()
    let intbuffer = parseInt(buffer)
    if (symbol === "+") {
        console.log(typeof(intbuffer))
        console.log(typeof(memory));
        intbuffer += 
    }
    rerender()

    // console.log("mem", memory)
    // console.log("buf", buffer)
    

};


function handleSymbol(symbol) {
    switch (symbol) {
        case "C":
            buffer = "0"
            memory = "0"
            rerender();
            break;

        case "←":
            if(buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            };
            rerender();
            break;

        case "=":
            break;

        case "+":
        case "-":
        case "x":
        case "÷":
            if (memory === '0') {
            memory = buffer;
            buffer = '0';
        } else {
            handleMaths(symbol);
        };
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

function flushOperator() {
    if (lastOperator === null) {
        return;
    } else {

    }
}

init();