let count = 0;
const btn = document.querySelector('#btn');
const number = document.querySelector('#number');
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');

function incriment(event) {
    count++;
    number.textContent = count;
}

function decriment() {
    count--;
    number.textContent = count;
}

function alerthello() {
    alert("hello")
}

btn.addEventListener('mouseenter', alerthello);
minusBtn.addEventListener('click', decriment);
plusBtn.addEventListener('click', incriment);