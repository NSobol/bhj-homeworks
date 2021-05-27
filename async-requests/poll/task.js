"use strict"

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();
xhr.addEventListener("readystatechange", getChange);

function getChange(event) {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText).data;
        const question = document.getElementById("poll__title");
        const list = document.getElementById("poll__answers");
        question.innerText = data.title;

        for (let answer of data.answers) {
            let btn = `<button class="poll__answer">${answer}</button>`
            list.insertAdjacentHTML("beforeend", btn);
        }
        const answerBtns = document.querySelectorAll(".poll__answer");
        for (let btn of answerBtns) {
            btn.addEventListener('click', () => alert("Спасибо, ваш голос засчитан!"));
        }
    }
}
