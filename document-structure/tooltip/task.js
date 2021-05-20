"use strict"
const tooltips = document.querySelectorAll(".has-tooltip");


for (let link of tooltips) {
    link.addEventListener('click', getHint);
}

function getHint(event) {
    event.preventDefault();
    let activ = event.target;
    let hintText = activ.getAttribute('title');
    console.log(hintText);
    const hint = document.querySelector('.tooltip');
    hint.innerText = hintText;
    hint.classList.add("tooltip_active");
    hint.style.top = activ.getBoundingClientRect().top + 20 + 'px';
    hint.style.left = activ.getBoundingClientRect().left + 'px';
}
