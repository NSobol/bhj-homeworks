"use strict"
const tooltips = document.querySelectorAll(".has-tooltip");
const hint = document.querySelector('.tooltip');

for (let link of tooltips) {
    link.addEventListener('click', getHint);
}

function getHint(event) {
    event.preventDefault();
    const tooltip = document.querySelector('.tooltip_active');
    let activ = event.target;
    let hintText = activ.getAttribute('title');
    if (hintText === hint.innerText) {
        hint.classList.toggle("tooltip_active");
    } else {
        hint.classList.add("tooltip_active");
    }
    hint.innerText = hintText;
    hint.style.top = activ.getBoundingClientRect().top + 20 + 'px';
    hint.style.left = activ.getBoundingClientRect().left + 'px';
}
