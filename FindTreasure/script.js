/*   Структура программы:
       1. Создать страницу игры с картинкой(картой сокровищ) и местом,
куда будут выводиться Рис. 11.1. Игра «Найди клад!» сообщения для игрока.
    2. Выбрать на карте случайную точку, где спрятан клад.
    3. Создать обработчик кликов. Каждый раз, когда игрок кликает
по карте, обработчик кликов должен:
    • Увеличить счетчик кликов на 1.
    • Вычислить, насколько далеко место клика от места, где
спрятан клад.
    • Отобразить на странице сообщение для игрока — «горячо»
или «холодно».
    • Поздравить игрока, если он кликнул по кладу или вблизи
него, и сообщить, сколько кликов ушло на поиски. */

// Получение случайных значений от 0 до size-1
var getRandomNumber = function (size) {
	return Math.floor(Math.random() * size);
};
// Вычислить расстояние от клика (event) до клада (target)
var getDistance = function (event, target) {
	var diffX = event.offsetX - target.x;
	var diffY = event.offsetY - target.y;
	return Math.sqrt(diffX * diffX + diffY * diffY);
};
// Получить для расстояния строку подсказки
var getDistanceHint = function (distance) {
	if (distance < 20) {
		return 'Обожжешься!';
	} else if (distance < 30) {
		return 'Очень горячо';
	} else if (distance < 90) {
		return 'Горячо';
	} else if (distance < 180) {
		return 'Тепло';
	} else if (distance < 360) {
		return 'Холодно';
	} else if (distance < 620) {
		return 'Очень холодно';
	} else {
		return 'Замерзнешь!';
	}
};

// Задаем переменные
var width = document.getElementById('map').width;
var height = document.getElementById('map').height;

var clicks = 0;
var leastClicks = 30;
// Случайная позиция клада
var target = {
	x: getRandomNumber(width),
	y: getRandomNumber(height),
};
// Обработчик кликов

function newGame(text) {
	alert(text);
	clicks = 0;
	leastClicks = 30;
	target.x = getRandomNumber(width);
	target.y = getRandomNumber(height);
	$('#distance').text('Начинай кликать по карте');
}

$('#map').click(function (event) {
	clicks++;
	leastClicks--;
	let text = '';
	// Получаем расстояние от места клика до клада
	var distance = getDistance(event, target);
	// Преобразуем расстояние в подсказку
	var distanceHint = getDistanceHint(distance);
	// Записываем в элемент #distance новую подсказку
	$('#distance').text(distanceHint);
	// Если клик был достатотчно близко, поздравляем с победой
	if (distance < 15) {
		text = `Клад найден! Сделано кликов: ${clicks}\nИгра обновлена`;
		newGame(text);
	}
	if (leastClicks == 0) {
		text = `КОНЕЦ ИГРЫ! ВЫ НЕ НАШЛИ КЛАД ЗА 30 КЛИКОВ!\nИгра обновлена`;
		newGame(text);
	}
	$('#clicks').text(`Осталось кликов: ${leastClicks}`);
});
