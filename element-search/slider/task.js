"use strict"
const sliderPrev = document.querySelector(".slider__arrow_prev");
const sliderNext = document.querySelector(".slider__arrow_next");
const sliders = document.querySelectorAll(".slider__item");
const dots = document.querySelectorAll(".slider__dot");
let dotsArray = Array.from(dots);
let slider = Array.from(sliders);
let slideIndex = slider.findIndex(elem => elem.classList.contains("slider__item_active"));
dotsArray[slideIndex].classList.toggle("slider__dot_active");

sliderPrev.onclick = function () {
    getSlider(slideIndex);
    slideIndex = slideIndex === 0 ? slider.length - 1 : slideIndex - 1;
    getSlider(slideIndex);
}

sliderNext.onclick = function () {
    getSlider(slideIndex);
    slideIndex = slideIndex === slider.length - 1 ? 0 : slideIndex + 1;
    getSlider(slideIndex);
}

function getSlider(slideIndex) {
    slider[slideIndex].classList.toggle("slider__item_active");
    dotsArray[slideIndex].classList.toggle("slider__dot_active");
}
