"use strict"
const reveal = document.querySelectorAll('.reveal');

let isInViewport = function (reveal) {
    const viewportHeight = window.innerHeight;
    //console.log("Высота видимого окна: " + viewportHeight);
    const elementTop = reveal.getBoundingClientRect().top;
    //console.log("Высота до элемента: " + elementTop);
    if ((elementTop < viewportHeight) && (elementTop > 0)) {
        reveal.classList.toggle("reveal_active");
    } else if ((elementTop > viewportHeight) && (elementTop < 0)) {
        reveal.classList.toggle("reveal_active");
    }
    return ((elementTop < viewportHeight) && (elementTop > 0)) ? true : false;
}
//console.log(isInViewport(reveal1));

function getReveal() {
    for (let rev of reveal) {
        isInViewport(rev);
    }
}

window.onscroll = getReveal;
