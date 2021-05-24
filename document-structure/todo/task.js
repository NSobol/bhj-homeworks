"use srtict"
const btnAdd = document.querySelector('.tasks__add');
const input = document.querySelector('.tasks__input');
const list = document.querySelector('.tasks__list');


btnAdd.addEventListener("click", getAddList);

function getAddList(event) {
    event.preventDefault();
    let inputValue = input.value;
    let list = document.getElementById('tasks__list');
    if (inputValue.trim() !== "") {
        list.innerHTML += `
        <div class="task">
            <div class="task__title">
               ${inputValue}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`;
    }

    input.value = '';
}

list.addEventListener("click", event => {
    if (event.target.classList.contains("task__remove")) {
        list.removeChild(event.target.parentElement);
    }
});
