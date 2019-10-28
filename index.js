let runningTotal = 0;
let buffer = "0"; //keep track what user presses
let previousOperator //keep track what user previously pressed;
const screen = document.querySelector('.screen');


//1. Bind up event listiner

document.querySelector('.buttons').addEventListener('click', function (event) {
    buttonClick(event.target.innerText);
})

//2. Write function button click taht check is prssed button is number or symbol

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }

}

function handleNumber(value) {
    if (buffer === '0') {
        buffer = value;
    } else {
        buffer += value;
    }
    rerender()
}

function handleSymbol(value) {

}


function rerender() {
    screen.innerText = buffer;
}