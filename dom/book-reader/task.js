"use strict"
const btns = document.querySelectorAll('.font-size');
let arrayBtns = Array.from(btns);
let index = arrayBtns.findIndex(elem => elem.classList.contains("font-size_active"));

const books = document.getElementsByClassName('book');


function change(num) {
    arrayBtns[num].classList.toggle("font-size_active");
}

for (let i = 0; i < arrayBtns.length; i++) {
    arrayBtns[i].onclick = function () {
        change(i);
    }
}
