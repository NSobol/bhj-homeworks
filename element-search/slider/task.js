"use strict"
const sliderPrev = document.querySelector(".slider__arrow_prev");
const sliderNext = document.querySelector(".slider__arrow_next");
const sliders = document.querySelectorAll(".slider__item");
let slider = Array.from(sliders);

sliderPrev.onclick = function () {
    let slideIndex = slider.findIndex(elem => elem.classList.contains("slider__item_active"));
    slider[slideIndex].classList.toggle("slider__item_active");
    slideIndex === 0 ? slideIndex = slider.length - 1 : slideIndex -= 1;
    slider[slideIndex].classList.toggle("slider__item_active");
}

sliderNext.onclick = function () {
    let slideIndex = slider.findIndex(elem => elem.classList.contains("slider__item_active"));
    slider[slideIndex].classList.toggle("slider__item_active");
    slideIndex === slider.length - 1 ? slideIndex = 0 : slideIndex += 1;
    slider[slideIndex].classList.toggle("slider__item_active");
}
