"use strict"
const chat = document.querySelector(".chat-widget");
const messages = document.querySelector('.chat-widget__messages');
const input = document.getElementById('chat-widget__input');

const strings = [
    "Добрый день!",
    "Все операторы заняты. Оставьте свой телефон. Мы перезвоним",
    "До свидания!",
    "У нас сечас закрыто. Позвоните завтра",
    "Что Вам продавали?!"
];

const HH = new Date().getHours();
const mm = new Date().getMinutes();

chat.addEventListener('click', showChat);
input.addEventListener("change", sendMsg);

function showChat(event) {
    chat.classList.add('chat-widget_active');
}

function sendMsg(event) {

    messages.innerHTML += `
                          <div class="message message_client">
                            <div class="message__time">${HH}:${mm}</div>
                            <div class="message__text">
                              ${event.target.value}
                            </div>
                          </div>
                        `;

    event.target.value = '';

    answerBot(strings);
}

function answerBot(answer) {
    const random = Math.floor(Math.random() * (answer.length))
    return messages.innerHTML += `
                          <div class="message">
                            <div class="message__time">${HH}:${mm}</div>
                            <div class="message__text">
                              ${answer[random]}
                            </div>
                          </div>
                        `;

}
