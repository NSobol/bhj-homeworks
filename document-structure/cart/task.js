"use strict"
const btnsMinus = document.querySelectorAll('.product__quantity-control_dec');
const btnsPlus = document.querySelectorAll('.product__quantity-control_inc');
const btnsBasket = document.querySelectorAll('.product__add');
let product;
//console.log(btnsMinus);

for (let btn of btnsMinus) {
    btn.addEventListener('click', (event) => {
        findProduct(event);
        let productValue = product.textContent;
        productValue > 1 ? productValue-- : productValue = 1;
        product.innerText = productValue;
    });
}

for (let btn of btnsPlus) {
    btn.addEventListener('click', (event) => {
        findProduct(event);
        let productValue = product.textContent;
        if (productValue => 1) {
            productValue++;
        }
        product.innerText = productValue;
    });
}

function findProduct(event) {
    let currentProduct = event.target;
    let productColntrols = currentProduct.closest(".product__quantity-controls");
    let controls = productColntrols.childNodes;
    return product = controls[3];
}
for (let btn of btnsBasket) {
    btn.addEventListener('click', () => {

    });
}
