"use strict";

// Объект корзины
let cart = {
    // количество товаров в корзине
    itemsCount: 0,
    // содержимое корзины: ID товара и количество
    items: {},

    /**
     * Добавляет товар в корзину или
     * увеличивает количество имеющегося товара
     * @param {number} itemId ID добавляемого товара
     */
    addToCart(itemId) {
        if (itemId in this.items) {
            this.items[itemId] += 1;
        } else {
            this.items[itemId] = 1;
        }
    },

    /**
     * Создаёт разметку для каждой позиции,
     * для добавления в блок корзины
     * @param {number} productID ID товара
     * @param {number} count количество данного товара в корзине
     * @returns {string}
     */
    createItemMarkup(productID, count) {
        return `
        <div class="cartItem">
            <div class="cartItem">${products[productID].name}</div>
            <div class="cartItem">$${products[productID].price}</div>
            <div class="cartItem">${count}</div>
            <div class="cartItem">$${products[productID].price * count}</div>
        </div>`
    },

    /**
     * Функция, обновляющая содержимое корзины
     */
    reloadCart() {
        // сбрасываем содержимое формы корзины
        let basketTotalCost = 0;
        cartContentItems.innerHTML = '';

        // пересчитываем корзину
        for (let item in cart.items) {
            cartContentItems.insertAdjacentHTML('beforeend', cart.createItemMarkup(item, cart.items[item]));
            basketTotalCost += products[item].price * cart.items[item];
            cartTotalCost.textContent = basketTotalCost;
        }
    }
}