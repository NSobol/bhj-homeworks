"use strict"
const btns = document.querySelectorAll('a.font-size');
let arrayBtns = Array.from(btns);
const books = document.querySelector('.book');

function change(event) {
    event.preventDefault();
    for (let i = 0; i < arrayBtns.length; i++) {
        arrayBtns[i].classList.remove("font-size_active");
        books.classList.remove("book_fs-small");
        books.classList.remove("book_fs-big");
    }
    let index = arrayBtns.indexOf(event.target);
    let size = arrayBtns[index].getAttribute('data-size');

    if (size === "small") {
        arrayBtns[index].classList.add("font-size_active");
        books.classList.add("book_fs-small");
    } else if (size === "big") {
        arrayBtns[index].classList.add("font-size_active");
        books.classList.add("book_fs-big");
    } else if (size === "null") {
        arrayBtns[index].classList.add("font-size_active");
    }
}

for (let i = 0; i < arrayBtns.length; i++) {
    arrayBtns[i].addEventListener("click", change);
}
