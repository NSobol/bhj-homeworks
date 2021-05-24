"use strict"
const tooltips = document.querySelectorAll(".has-tooltip");
const hint = document.querySelector('.tooltip');

for (let link of tooltips) {
    link.addEventListener('click', getHint);
}

hint.addEventListener('click', () => hint.classList.toggle('tooltip_active'));

function getHint(event) {
    event.preventDefault();
    const tooltip = document.querySelector('.tooltip_active');

    if (tooltip) {
        tooltip.classList.toggle('tooltip_active');
    }
    let activ = event.target;
    let hintText = activ.getAttribute('title');
    if (hintText === hint.innerText) {
        hint.classList.remove("tooltip_active");
    } else {
        hint.innerText = hintText;
        hint.classList.toggle("tooltip_active");
        hint.style.top = activ.getBoundingClientRect().top + 20 + 'px';
        hint.style.left = activ.getBoundingClientRect().left + 'px';
    }

}
