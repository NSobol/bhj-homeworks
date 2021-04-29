"use strict"
const menuList = document.querySelectorAll("ul.menu_main > li> a");
let arrayMenuList = Array.from(menuList);

for (let i = 0; i < arrayMenuList.length; i++) {
    if (arrayMenuList[i].nextElementSibling) {
        arrayMenuList[i].onclick = function () {
            arrayMenuList[i].nextElementSibling.classList.toggle("menu_active");
            return false;
        }
    }
}
