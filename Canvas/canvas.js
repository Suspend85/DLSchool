var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// * №1. Функция рисующая снеговика.
// Функция рисования окружностей с параметрами: координаты, радиус, заполнение, цвет.
var circle = function (x, y, radius, fillCircle, color = "black") {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  if (fillCircle == false) {
    ctx.stroke();
  } else if (fillCircle == true) {
    ctx.fill();
  }
};
// функция рисования снеговика в заданных координатах x,y
var drawSnowman = function (x, y) {
  circle(x, y, 30, false); // голова
  circle(x - 10, y - 10, 5, true); // левый глаз
  circle(x + 10, y - 10, 5, true); // правый глаз
  circle(x, y + 3, 5, true, "orange"); // нос
  circle(x, y + 70, 40, false); // туловище
  circle(x, y + 50, 5, true); // пуговица1
  circle(x, y + 70, 5, true); // пуговица2
  circle(x, y + 90, 5, true); // пуговица3
};
// drawSnowman(50, 50);

//* №2. Рисование по массиву точек.
var drawPoints = function (arr) {
  ctx.beginPath();
  ctx.moveTo(arr[0][0], arr[0][1]);
  for (let i = 0; i < arr.length; i++) {
    ctx.lineTo(arr[i][0], arr[i][1]);
  }
  ctx.stroke();
};
var points = [
  [60, 60],
  [60, 110],
  [110, 110],
  [110, 60],
  [60, 60],
];
// drawPoints(points);

var mysteryPoints = [
  [50, 50],
  [50, 100],
  [25, 120],
  [100, 50],
  [70, 90],
  [100, 90],
  [70, 120],
];
// drawPoints(mysteryPoints);

// * №3 Рисование мышкой.
$("#canvas").mousemove(function (mousemove) {
  ctx.beginPath();
  ctx.arc(mousemove.pageX, mousemove.pageY, 3, 0, Math.PI * 2, false);
  ctx.fill();
});

//* №4. Человечек в "Виселице".
