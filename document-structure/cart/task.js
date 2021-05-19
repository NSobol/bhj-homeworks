"use strict"
const btnsMinus = document.querySelectorAll('.product__quantity-control_dec');
const btnsPlus = document.querySelectorAll('.product__quantity-control_inc');
const btnsBasket = document.querySelectorAll('.product__add');
let productValue = document.querySelector(".product__quantity-value");
console.log(btnsMinus);

for (let btn of btnsMinus) {
    btn.addEventListener('click', () => {
        let product = document.querySelector(".product__quantity-value");
        let productValue = product.textContent;
        if (productValue > 1) {
            productValue--;
        } else {
            productValue = 1;
        }
        product.innerText = productValue;
    });
}

for (let btn of btnsPlus) {
    btn.addEventListener('click', () => {
        let product = document.querySelector(".product__quantity-value");
        let productValue = product.textContent;
        if (productValue => 1) {
            productValue++;
        }
        product.innerText = productValue;
    });
}

for (let btn of btnsBasket) {
    btn.addEventListener('click', () => {

    });
}

function 
