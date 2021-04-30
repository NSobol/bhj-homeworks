"use strict"
const sliderPrev = document.querySelector(".slider__arrow_prev");
const sliderNext = document.querySelector(".slider__arrow_next");
const sliders = document.querySelectorAll(".slider__item");
let slider = Array.from(sliders);
let sliderLength = slider.length;

sliderPrev.onclick = function () {
    let slideIndex = slider.findIndex(elem => {
        if (elem.classList.value === "slider__item slider__item_active") {
            return true;
        }
        return false;
    });
    slider[slideIndex].classList.toggle("slider__item_active");
    slideIndex === 0 ? slideIndex = sliderLength - 1 : slideIndex -= 1;
    slider[slideIndex].classList.toggle("slider__item_active");
}

sliderNext.onclick = function () {
    let slideIndex = slider.findIndex(elem => {
        if (elem.classList.value === "slider__item slider__item_active") {
            return true;
        }
        return false;
    });
    slider[slideIndex].classList.toggle("slider__item_active");
    slideIndex === sliderLength - 1 ? slideIndex = 0 : slideIndex += 1;
    slider[slideIndex].classList.toggle("slider__item_active");
}
