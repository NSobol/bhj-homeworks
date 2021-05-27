"use strict"

const progress = document.getElementById('progress');
const btnForm = document.getElementById('send');
btnForm.addEventListener('click', getSendForm);

function getSendForm(event) {
    event.preventDefault();
    const form = document.getElementById('form');
    const formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.onprogress = event => progress.value = event.loaded;
    xhr.send(formData);
}
