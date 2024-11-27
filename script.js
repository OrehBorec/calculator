let a = '';
let b = '';
let sign = '';
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.',];
const action = ['-', '+', 'X', '/'];
const clear = document.querySelector('#ac');
const display = document.querySelector('.display');
const btnNumbers = document.querySelectorAll('.btn-number');
const btnActions = document.querySelectorAll('.btn-operations')
const btnEquals = document.querySelector('#equals');


btnNumbers.forEach(button => {
    button.onclick = function () {

        if (sign && b === '') {
            display.textContent = '';
        }

        if (!sign) {

            if (a.includes('.') && button.textContent === '.') return; 
            a += button.textContent;
            display.textContent = a;
        } else {

            if (b.includes('.') && button.textContent === '.') return;
            b += button.textContent;
            display.textContent = b;
        }
    };
});

btnActions.forEach(button => {
    button.onclick = function () {
        if (a && !b) {
            sign = button.textContent; 
        } else if (a && b && sign) {
            calculate();
            sign = button.textContent;
        }
    };
});

btnEquals.onclick = function () {
    if (a && b && sign) {
        calculate();
    }
};

function calculate() {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    let result = 0;

    switch (sign) {
        case '+':
            result = numA + numB;
            break;
        case '-':
            result = numA - numB;
            break;
        case 'X':
            result = numA * numB;
            break;
        case '/':
            result = numB !== 0 ? numA / numB : 'на ноль делить да ца мег';
            break;
    }

    display.textContent = result;
    a = String(result);
    b = '';
    sign = '';
}
clear.onclick = function () {
    a = '';
    b = '';
    sign = '';
    display.textContent = '0';
};





