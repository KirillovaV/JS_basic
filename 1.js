"use strict";

class NumDigits {
    constructor(units, tens, hundreds) {
        this.units = units;
        this.tens = tens;
        this.hundreds = hundreds;
    }
}

function getNumDigits(number) {
    number = parseInt(number);
    if (isNaN(number)) {
        console.log('Необходимо ввести целое число.');
        return {};
    }
    if (number < 0 || number > 999) {
        console.log('Нужно ввести число от 0 до 999.');
        return {};
    }

    let units = number % 10;
    let tens = Math.floor(number / 10) % 10;
    let hundreds = Math.floor(number / 100);

    return new NumDigits(units, tens, hundreds);
}