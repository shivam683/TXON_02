let display = document.querySelector('.display');

function addToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    let result = eval(display.value);
    display.value = result;
}