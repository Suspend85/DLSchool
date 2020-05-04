//* 7. Пишем игру «Виселица» через функции
/*
Выбрать случайное слово
Пока слово не угадано {
  Показать игроку текущее состояние игры
  Запросить у игрока вариант ответа
  Если игрок хочет выйти из игры {
    Выйти из игры
  }
  Иначе Если вариант ответа — не одиночная буква {
    Сообщить игроку, что он должен ввести букву
  }
  Иначе {
    Если такая буква есть в слове {
      Обновить состояние игры, подставив новую букву
    }
  }
}
Поздравить игрока с победой — слово угадано
*/
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var words = [
  // массив слов
  "программа",
  "макака",
  "прекрасный",
  "оладушек",
  "монитор",
  "кружка",
  "акустика",
];
var pickWord = function () {
  // Возвращает случайно выбранное слово
  return words[Math.floor(Math.random() * words.length)];
};

var setupAnswerArray = function (word) {
  // Возвращает итоговый массив для заданного слова word
  var answerArr = [];
  for (let i = 0; i < word.length; i++) {
    answerArr[i] = "_";
  }
  return answerArr;
};

var showPlayerProgress = function (answerArr) {
  // С помощью alert отображает текущее состояние игры
  return alert(` ${answerArr.join(" ")}    Осталось ${remains} попыток`);
};

var getGuess = function () {
  // Запрашивает ответ игрока с помощью prompt
  let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
  return guess;
};

var updateGameState = function (guess, word, answerArr) {
  // Обновляет answerArr согласно ответу игрока (guess) возвращает число, обозначающее, сколько раз буква guess стречается в слове, чтобы можно было обновить значение remainingLetters
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    //обновляем состояние игры
    if (word[i] === guess.toLowerCase() && answerArr[i] === "_") {
      // если ответ совпадает с какой-нибудь из букв - присваиваем ответ на индекс в слове.
      answerArr[i] = guess.toLowerCase();
      counter++;
    }
  }
  remains--;
  return counter;
};

var drawMan = function (misses) {
  ctx.linewidth = 4;

  if (misses === 0) {
    ctx.strokeRect(20, 20, 20, 20);
  } else if (misses === 1) {
    ctx.beginPath();
    ctx.moveTo(30, 40);
    ctx.lineTo(30, 80);
    ctx.stroke();
  } else if (misses === 1) {
    ctx.beginPath();
    ctx.moveTo(30, 80);
    ctx.lineTo(10, 110);
    ctx.stroke();
  } else if (misses === 2) {
    ctx.beginPath();
    ctx.moveTo(30, 80);
    ctx.lineTo(50, 110);
    ctx.stroke();
  } else if (misses === 3) {
    ctx.beginPath();
    ctx.moveTo(30, 60);
    ctx.stroke();
  } else if (misses === 4) {
    ctx.beginPath();
    ctx.moveTo(30, 60);
    ctx.lineTo(50, 50);
    ctx.stroke();
  }
};

var showAnswerAndCongratulatePlayer = function (answerArr) {
  // С помощью alert показывает игроку отгаданное слово и поздравляет его с победой
  alert(answerArr.join(" "));
  return alert("Было загадано слово " + word);
};

var ifRemainsAreOver = function (remains) {
  // проверка на количество попыток и вывод сообщения об их исчерпании
  if (remainingLetters > 0 && remains == 0) {
    return alert(`вы не уложились в ${word.length} попыток`);
  }
};

// word: загаданное рандомное слово
var word = pickWord(words);
// консолим выбранное слово для тестов.
console.log(word);
// answerArray: итоговый массив
var answerArr = setupAnswerArray(word);
// счетчик ошибок
var misses = 0;

// remainingLetters: сколько букв осталось угадать
var remainingLetters = word.length;
// remains: количество попыток (равно длине загаданного слова)
var remains = word.length;

while (remainingLetters > 0 && remains > 0) {
  showPlayerProgress(answerArr);
  // guess: ответ игрока
  var guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите одиночную букву.");
  } else {
    // correctGuesses: количество открытых букв
    var correctGuesses = updateGameState(guess, word, answerArr);
    remainingLetters -= correctGuesses;
    if (correctGuesses === 0) {
      drawMan(misses);
      misses++;
    }
  }
}

ifRemainsAreOver(remains);
showAnswerAndCongratulatePlayer(answerArr);
