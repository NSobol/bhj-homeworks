"use strict"
const image = document.getElementById("cookie");
const output = document.getElementById("clicker__counter");
const clickSpeed = document.getElementById("clicker__speed");
let clickTime = Date.now();
let count = 0;

function change() {
    count++;
    output.textContent = count;
    clickSpeed.textContent = (1 / ((Date.now() - clickTime) / 1000)).toFixed(2);
    if (count % 2 !== 0) {
        this.width = 300;
    } else {
        this.width = 200;
    }
    clickTime = Date.now();
}

image.onclick = change;
