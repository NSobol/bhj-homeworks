"use strict"
const editor = document.getElementById('editor');

editor.addEventListener('input', getSaveText);

function getSaveText(event) {
    localStorage.text = editor.value;
}

window.addEventListener('load', getText);

function getText(event) {
    if (localStorage.text) {
        editor.value = localStorage.text;
    }
}

const clears = document.getElementById('clear');

clears.addEventListener("click", getClear);

function getClear(event) {
    localStorage.clear();
    editor.value = '';
}
