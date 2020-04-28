var dog = {
  name: "Оладушек",
  legs: 4,
  isAwesome: true,
  // speak: speak,
  // sound: "Гав!"
};

dog.age = 6;
console.log(dog);

dog.bark = function () {
  console.log('гав-гав! Меня зовут ' + this.name + '!');
}
dog.bark();

var speak = function () {
  console.log(this.sound + "! Меня зовут " + this.name + "!");
}

var cat = {
  sound: "Мяу",
  name: "Варежка",
  speak: speak
};
var pig = {
  sound: "Хрю",
  name: "Чарли",
  speak: speak,
};
var horse = {
  sound: "И-го-го",
  name: "Мэри",
  speak: speak
};
cat.speak();
pig.speak();
horse.speak();





