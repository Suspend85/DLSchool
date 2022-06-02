// РИСУЕМ ДОРОГУ
var offset = 0;
var intervalLength = 10;

$('#topRoad').offset({ top: 0, left: 0 });
$('#centerRoad').offset({ top: 250, left: 0 });
$('#bottomRoad').offset({ top: 500, left: 0 });

var moveRoad = function () {
	// Ф-Я имитации движения дороги
	$('#topRoad').offset({ left: offset });
	$('#centerRoad').offset({ left: offset });
	$('#bottomRoad').offset({ left: offset });
	offset--;
	if (offset < -10) {
		offset = 0;
	}
};
setInterval(moveRoad, intervalLength);

// Создаем конструктор Car
var Car = function (x, y) {
	// свойство объекта this.x сохраняет переданный в него аргумент Х (координаты задающие позицию машины на экране)
	this.x = x;
	this.y = y;
	this.draw();
	// this.speed = 5;
};

// Отображение объектов, созданных конструктором Car..
// Помещает изображение машины в позицию Х,У соответствующую свойствам х,у каждого объекта..
// Добавляет метод draw к свойству Car.prototype, чтобы он появился у всех объектов, созданных вызовом new Car
Car.prototype.draw = function () {
	var carHtml = '<img src="vector.png" width="200px">';
	// передаем carHtml в функцию $, которая преобразует HTML в JQuery-элемент.
	this.carElement = $(carHtml);
	// Вызываем метод CSS для carElement чтобы задать изображению машины координаты
	this.carElement.css({
		position: 'absolute',
		left: this.x,
		top: this.y,
	});
	// добавляем carElement к элементу body (теперь carElement появится на странице).
	$('body').append(this.carElement);
};

$('body').append();

Car.prototype.moveRight = function (speed) {
	this.x += speed;

	this.carElement.css({
		left: this.x,
		top: this.y,
	});
};
Car.prototype.moveLeft = function (speed) {
	this.x -= speed;
	this.carElement.css({
		left: this.x,
		top: this.y,
	});
};
Car.prototype.moveUp = function (speed) {
	this.y -= speed;
	this.carElement.css({
		left: this.x,
		top: this.y,
	});
};
Car.prototype.moveDown = function (speed) {
	this.y += speed;
	this.carElement.css({
		left: this.x,
		top: this.y,
	});
};

// Вызываем конструктор Car для создания нового объекта Tesla.
var tesla = new Car(20, 80);
var honda = new Car(20, 300);

setInterval(function () {
	tesla.moveRight(Math.random() * 5);
	tesla.moveUp(Math.random() * 5);
	tesla.moveDown(Math.random() * 5);
	tesla.moveLeft(Math.random() * 3);

	honda.moveRight(Math.random() * 5);
	honda.moveUp(Math.random() * 5);
	honda.moveDown(Math.random() * 5);
	honda.moveLeft(Math.random() * 3);
}, 30);
