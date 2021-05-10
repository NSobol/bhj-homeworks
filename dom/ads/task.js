"use sctict"
const rotators = document.querySelectorAll(".rotator__case");
let arrayRorators = Array.from(rotators);
let index = arrayRorators.findIndex(elem => elem.classList.contains("rotator__case_active"));

function getRotator(num) {
    arrayRorators[num].classList.toggle("rotator__case_active");
    //let stylSpeed = one.getAttribute('data-speed');
    //console.log(stylSpeed);
    let stylColor = arrayRorators[num].getAttribute('data-color');
    arrayRorators[num].style.color = stylColor;
}

function getSlider() {
    getRotator(index);
    index = index === arrayRorators.length - 1 ? 0 : index + 1;
    getRotator(index);
}

setInterval(getSlider, 1000);
