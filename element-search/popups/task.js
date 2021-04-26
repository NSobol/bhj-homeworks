"use strict"
const modal = document.getElementById("modal_main");

const modalSuccess = document.getElementById("modal_success");

modal.classList.add("modal_active");

const showSuccess = document.getElementsByClassName("show-success");
const btn = showSuccess.item(0);
btn.onclick = function () {
    modalSuccess.classList.add("modal_active");
}

const closeModal = document.getElementsByClassName("modal__close_times");
let arrayClose = Array.from(closeModal);

for (let i = 0; i < arrayClose.length; i++) {
    let close = arrayClose[i];
    close.onclick = function () {
        this.parentElement.parentElement.classList.remove("modal_active");
    }
}
