"use strict"
const btns = document.querySelectorAll('.book__control_font-size > a');
let arrayBtns = Array.from(btns);
const colorsTextBtn = document.querySelectorAll('.book__control_color > a');

let colorsText = Array.from(colorsTextBtn);
const colorsBtn = document.querySelectorAll('.book__control_background > a');
let colors = Array.from(colorsBtn);
const books = document.querySelector('#book');

function change(event) {
    event.preventDefault();
    for (let i = 0; i < arrayBtns.length; i++) {
        arrayBtns[i].classList.remove("font-size_active");
    }
    let index = arrayBtns.indexOf(event.target);
    let size = arrayBtns[index].getAttribute('data-size');
    if (size === "small") {
        arrayBtns[index].classList.toggle("font-size_active");
        books.className = "book book_fs-small";
    } else if (size === "big") {
        arrayBtns[index].classList.toggle("font-size_active");
        books.className = "book book_fs-big";
    } else {
        arrayBtns[index].classList.toggle("font-size_active");
        books.className = "book";
    }
}

for (let i = 0; i < arrayBtns.length; i++) {
    arrayBtns[i].addEventListener("click", change);
}

function getColorsText() {
    event.preventDefault();
    for (let i = 0; i < colorsText.length; i++) {
        colorsText[i].classList.remove("color_active");
    }
    let index = colorsText.indexOf(event.target);
    let colorText = colorsText[index].getAttribute('data-text-color');
    if (colorText === "black") {
        colorsText[index].classList.toggle("color_active");
        books.classList.add("book_color-black");
        books.classList.remove("book_color-gray", "book_color-whitesmoke");
    } else if (colorText === "whitesmoke") {
        colorsText[index].classList.toggle("color_active");
        books.classList.add("book_color-whitesmoke");
        books.classList.remove("book_color-gray", "book_color-black");
    } else {
        colorsText[index].classList.toggle("color_active");
        books.classList.add("book_color-gray");
        books.classList.remove("book_color-black", "book_color-whitesmoke");
    }
}

for (let i = 0; i < colorsText.length; i++) {
    colorsText[i].addEventListener("click", getColorsText);
}

function getColors() {
    event.preventDefault();
    for (let i = 0; i < colors.length; i++) {
        colors[i].classList.remove("color_active");
    }
    let index = colors.indexOf(event.target);
    let backgroundColor = colors[index].getAttribute('data-bg-color');
    if (backgroundColor === "black") {
        colors[index].classList.toggle("color_active");
        books.classList.add("book_bg-black");
        books.classList.remove("book_bg-gray", "book_bg-white");
    } else if (backgroundColor === "gray") {
        colors[index].classList.toggle("color_active");
        books.classList.add("book_bg-gray");
        books.classList.remove("book_bg-black", "book_bg-white");
    } else {
        colors[index].classList.toggle("color_active");
        books.classList.add("book_bg-white");
        books.classList.remove("book_bg-black", "book_bg-gray");
    }
}

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", getColors);
}
