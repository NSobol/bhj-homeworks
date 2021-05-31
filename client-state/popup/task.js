"use strict"
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");
modal.classList.add("modal_active");

closeModal.addEventListener('click', getCloseModal);

function getCloseModal(event) {
    event.preventDefault();
    document.cookie = 'closed=true';
    modal.classList.remove("modal_active");
}

window.addEventListener('load', getCheckCookie);

const cooki = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
            .pop()
            .split(";")
            .shift();
    }
}

function getCheckCookie(event) {
    (!cooki('closed')) ? modal.classList.add('modal_active'): modal.classList.remove("modal_active")
}
