let game = {
    // очки игрока
    score: 0,

    run() {
        // Запускаем цикл игры, зависящий от количества вопросов в массиве
        for (let i = 0; i < questions.length; i++) {
            // перед каждым вопросом очищаем консоль, выводим новый вопрос и 
            // варианты ответов
            console.clear();
            console.log(`${i + 1}. ${questions[i].question}`);
            for (let j = 0; j < 4; j++) {
                console.log(questions[i].answers[j]);
            }
            // получаем отыет пользователя
            let userAnswer = user.getUserAnswer();
            if (userAnswer === null) {
                // Завершаем игру, если ответ не пришёл
                this.end();
                return;
            }
            // если ответ правильный, увеличиваем счётчик
            if (userAnswer === questions[i].rightAnswer) {
                this.score++;
            }
        }
        // завершаем игру, после всех вопросов
        this.end();
    },

    // Приветствуем игрока и предлагаем начать игру.
    init() {
        console.log("Добро пожаловать в игру 'Кто хочет стать миллионером?'.")
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    },

    // Завершаем игру:
    // Выводим количество заработанных очков, очищаем счёт и предлагаем сыграть снова
    end() {
        console.clear();
        console.log(`Игра завершена. Количество правильных ответов: ${this.score}.`);
        this.score = 0;
        if (confirm("Вы хотите играть снова?")) {
            this.run();
        }
    }
};

game.init();