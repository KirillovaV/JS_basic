"use strict";

// получаем ссылки на элементы
// счётчик товаров в корзине
let cartItemsCount = document.querySelector('.cartItemsCount');
// содержимое корзины
let cartContentItems = document.querySelector('.cartContentItems');
// итоговая стоимость заказа
let cartTotalCost = document.querySelector('.cartTotalCost');

// получаем кнопки
let featuredButtons = document.querySelectorAll('.addToCartButton');

// показываем/скрываем корзину
let cartButton = document.querySelector('.cartIconWrap');
let cartEl = document.querySelector('.cart');

cartButton.addEventListener('click', function () {
    cartEl.classList.toggle('hidden');
});

// добавляем обработчик нажатия кнопок
featuredButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        // увеличиваем счётчик корзины
        cartItemsCount.textContent = ++cart.itemsCount;

        // добавляем товар в корзину и обновляем её
        cart.addToCart(event.target.dataset.id);
        cart.reloadCart();
    });
});
