"use strict"
let currentSlide = 0;
const sliderPrev = document.querySelector(".slider__arrow_prev");
const sliderNext = document.querySelector(".slider__arrow_next");
const sliders = document.querySelectorAll(".slider__item");
let slider = Array.from(sliders);
let sliderLength = slider.length;
console.log(slider);

sliderPrev.onclick = function () {
    if (currentSlide == 0) {
        slider[currentSlide].classList.toggle("slider__item_active");
        currentSlide = sliderLength - 1;
        slider[currentSlide].classList.toggle("slider__item_active");
    } else {
        currentSlide -= 1;
        slider[currentSlide].classList.toggle("slider__item_active");
    }
}

sliderNext.onclick = function () {
    if (currentSlide >= 0) {
        slider[currentSlide].classList.toggle("slider__item_active");
        if (currentSlide === sliderLength - 1) {
            currentSlide = 0;
            slider[currentSlide].classList.toggle("slider__item_active");
        } else {
            currentSlide += 1;
            slider[currentSlide].classList.toggle("slider__item_active");
        }
    }
}
