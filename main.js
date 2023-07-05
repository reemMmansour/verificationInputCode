let input_one = document.querySelector('[name="one"]');
let input_two = document.querySelector('[name="two"]');
let input_three = document.querySelector('[name="three"]');
let input_four = document.querySelector('[name="four"]');
let input_five = document.querySelector('[name="five"]');
let input_six = document.querySelector('[name="six"]');
let spinner = document.querySelector('span');
let button_confirm = document.querySelector('button');

window.onload = () => {
    input_one.focus();
    input_one.onkeyup = () => {
        if (input_one.value.length > 1) {
            input_one.value = input_one.value.slice(0 , 1);
        }
        console.log(input_one.value);
        if (input_one.value.length === 1){
            input_one.blur();
            input_two.focus();
        }
    };
    input_two.onkeyup = () => {
        if (input_two.value.length > 1) {
            input_two.value = input_two.value.slice(0 , 1);
        }
        console.log(input_two.value);
        if (input_two.value.length === 1){
            input_two.blur();
            input_three.focus();
        }
    };
    input_three.onkeyup = () => {
        if (input_three.value.length > 1) {
            input_three.value = input_three.value.slice(0 , 1);
        }
        console.log(input_three.value);
        if (input_three.value.length === 1){
            input_three.blur();
            input_four.focus();
        }
    };
    input_four.onkeyup = () => {
        if (input_four.value.length > 1) {
            input_four.value = input_four.value.slice(0 , 1);
        }
        console.log(input_four.value);
        if (input_four.value.length === 1){
            input_four.blur();
            input_five.focus();
        }
    };
    input_five.onkeyup = () => {
        if (input_five.value.length > 1) {
            input_five.value = input_five.value.slice(0 , 1);
        }
        console.log(input_five.value);
        if (input_five.value.length === 1){
            input_five.blur();
            input_six.focus();
        }
    };
    input_six.onkeyup = () => {
        if (input_six.value.length > 1) {
            input_six.value = input_six.value.slice(0 , 1);
        }
        console.log(input_six.value);
        if (input_six.value.length === 1){
            input_six.blur();
            spinner.style.visibility = 'visible';
            button_confirm.classList.add('input-end');
        }
    };
};