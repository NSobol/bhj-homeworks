"use strict"

const subMenu = document.querySelectorAll('.interests_active');
//console.log(subMenu);

for (let i = 0; i < subMenu.length; i++) {
    let subCheckboxItem = subMenu.item(i);
    let subCheckboxPerents = subCheckboxItem.closest(".interest");
    let checkbox = subCheckboxPerents.firstElementChild.firstElementChild;
    //console.log(checkbox);

    function change() {
        let subCheckboxes = subCheckboxItem.children;
        //console.log(subCheckboxes);

        for (let j = 0; j < subCheckboxes.length; j++) {
            let subCheckboxesItem = subCheckboxes.item(j);
            let a = subCheckboxesItem.firstElementChild.firstElementChild;
            a.checked = checkbox.checked;
        }
    }
    checkbox.addEventListener('change', change);
}
