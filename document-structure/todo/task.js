"use srtict"
const btnAdd = document.querySelector('.tasks__add');
const input = document.querySelector('.tasks__input');
const list = document.querySelector('.tasks__list');


btnAdd.addEventListener("click", getAddList);

function getAddList(event) {
    event.preventDefault();
    let inputValue = input.value;
    let list = document.getElementById('tasks__list');
    list.innerHTML += `
        <div class="task">
            <div class="task__title">
               ${inputValue}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
        `;
    input.value = '';
}

let listChildren = list.children;
console.log(listChildren);
const list1 = document.querySelectorAll('.task');

const btnsDelete = document.getElementsByClassName("task__remove");

for (let btn of btnsDelete) {
    btn.addEventListener("click", () => console.log("Нашел"));
    console.log(btn);
}

function getDelete(event) {
    event.preventDefault();
    let task = event.target.closest('.task');
    task.remove();
}
