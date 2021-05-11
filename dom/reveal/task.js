"use strict"
const reveal = document.querySelectorAll('.reveal');

let isInViewport = function (reveal) {
    const viewportHeight = window.innerHeight;
    const elementTop = reveal.getBoundingClientRect().top;
    if ((elementTop < viewportHeight) && (elementTop > 0)) {
        reveal.classList.toggle("reveal_active");
    } else if ((elementTop > viewportHeight) && (elementTop < 0)) {
        reveal.classList.toggle("reveal_active");
    }
    return ((elementTop < viewportHeight) && (elementTop > 0)) ? true : false;
}


function getReveal() {
    for (let rev of reveal) {
        isInViewport(rev);
    }
}

window.onscroll = getReveal;
