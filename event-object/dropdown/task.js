"use strict"

const btn = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector("ul.dropdown__list");
const list = document.querySelectorAll("a");

function getList(event) {
    dropdownList.classList.toggle("dropdown__list_active");
}

btn.addEventListener("click", getList);

function getValue(event) {
    event.preventDefault();
    btn.textContent = event.target.textContent;
    dropdownList.classList.toggle("dropdown__list_active");
}

for (let item of list) {
    item.addEventListener("click", getValue);
}
