"use strict"
let countdown = document.getElementById("timer");

let countFuncDown = function () {
    let currentTime = parseFloat(countdown.textContent);

    if (currentTime > 0) {
        countdown.textContent = currentTime - 1;
    } else {
        alert("Вы победили в конкурсе!");
        window.clearInterval(timer);
    }
};

let timer = window.setInterval(countFuncDown, 1000);
