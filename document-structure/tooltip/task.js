"use strict"
const tooltips = document.querySelectorAll(".has-tooltip");
console.log(tooltips);

for (let link of tooltips) {
    let hintText = link.getAttribute('title');
    console.log(hintText);
    link.insertAdjacentHTML("afterEnd", "<div class='tooltip'> ${hintText} </div>");
    link.addEventListener('click', getHint);
}

const hint = document.querySelector('.tooltip');
console.log(hint);

function getHint(event) {
    event.preventDefault();
    let activ = event.target;
    if (activ) {
        hint.classList.toggle(".tooltip_active");
    }
}
