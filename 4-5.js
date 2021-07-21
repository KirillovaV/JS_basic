"use strict";

/**
 * Функция складывает два числа
 * @param {number} num1 - Первое слогаемое
 * @param {number} num2 - Второе слогаемое
 * @returns {number} - Сумма чисел
 */
function sum(num1, num2) {
    return num1 + num2
}

/**
 * Функция вычитает из первого числа второе
 * @param {number} num1 - Уменьшаемое
 * @param {number} num2 - Вычитаемое
 * @returns {number} - Разность чисел
 */
function sub(num1, num2) {
    return num1 - num2
}

/**
 * Функция перемножает два числа
 * @param {number} num1 - Первый множитель
 * @param {number} num2 - Второй множитель
 * @returns {number} - Произведение чисел
 */
function mul(num1, num2) {
    return num1 * num2
}

/**
 * Функция делит первое число на второе
 * @param {number} num1 - Делимое
 * @param {number} num2 - Делитель
 * @returns {number} - Частное чисел
 */
function div(num1, num2) {
    return num1 / num2
}

/**
 * Функция выполняет основные арифметические операции
 * над двумя аргументами
 * @param {number} arg1 - Первое число
 * @param {number} arg2 - Второе число
 * @param {string} operation - Выполняемое действие ("+", "-", "*", "/")
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return sum(arg1, arg2);
        case '-':
            return sub(arg1, arg2);
        case '*':
            return mul(arg1, arg2);
        case '/':
            return div(arg1, arg2);
        default:
            alert('Неизвестная операция!')
    }
}