"use strict"
const btns = document.querySelectorAll('a');
let arrayBtns = Array.from(btns);

const book = document.getElementsByClassName('book');
console.log(book[0]);


function change() {
    let index = arrayBtns.findIndex(elem => elem.classList.contains("font-size_active"));
    if (index === 0) {
        arrayBtns[1].classList.toggle("font-size_active");
        arrayBtns[0].classList.toggle("font-size_active");
        book[0].classList.add("book_fs-small");
    }
    //    } else if (index === 2) {
    //        arrayBtns[index].classList.toggle("font-size_active");
    //        book[0].classList.add("book_fs-big");
    //    } else {
    //        arrayBtns[1].classList.toggle("font-size_active");
    //        book[0].classList.toggle("book");
    //    }
}

function getReader(event) {
    console.log(event);
    //change(index);
    //index = arrayBtns.indexOf(event.target);
    //console.log(index);
    //change(index);
    //book.classList.toggle('book_fs-small');

}
for (let i = 0; i < arrayBtns.length; i++) {
    arrayBtns[i].addEventListener("click", function () {
        change();
    });
}
