user = {
    // получаем ответ пользователя
    getUserAnswer() {
        const availableAnswers = [1, 2, 3, 4];

        while (true) {
            // можно оставить и буквы... но цифры набирать удобнее.
            let userAnswer = parseInt(prompt("Ваш ответ (1 - a, 2 - b, 3 - c, 4 - d). Отмена для выхода."));
            if (isNaN(userAnswer)) {
                return null;
            }

            if (!availableAnswers.includes(userAnswer)) {
                alert('Ответом должно быть одно из чисел 1, 2, 3, или 4.');
                continue;
            }

            return userAnswer;
        }
    }
};