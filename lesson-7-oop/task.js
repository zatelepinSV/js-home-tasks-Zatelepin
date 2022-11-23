'use strict'


function Question(question, varResponse, rightResponse) {
  this.question = question;
  this.varResponse = varResponse;
  this.rightResponse = rightResponse;
}

var a = new Question('Вопрос 1: Сколько дней живёт бабочка однодневка?', ['1 Пять', '2 Десять', '3 Один', '4 Пока не съедят'], 3);
var b = new Question('Вопрос 2: Подолжите фразу "Волка ноги..."', ['1 Носят', '2 Кормят', '3 Спасают', '4 Волосатые'], 2);
var c = new Question('Вопрос 3: Одно дно, два дна, три дна, четыре дна, пять...? ', ['1 Дон', '2 Днов', '3 Донцев', '4 Доньев'], 4);

Question.prototype.loadQuestion = function () {
  console.log(this.question);
  console.log(this.varResponse.join('\n'));
  /*for (var k = 0; k < this.varResponse.length; k++) {
    console.log((k+1) + ' ' + this.varResponse[k]);
  }*/
}
Question.prototype.checkResponse = function (resp) {
  if (resp === this.rightResponse) {
    console.log('Правильно!');
  } else {
    console.log('Неправильно!');
  }
}

var arrayQuest = [a, b, c];
var randQuest = Math.floor(Math.random() * arrayQuest.length);
arrayQuest[randQuest].loadQuestion();
var response = parseInt(prompt('Введите свой ответ', ''));
arrayQuest[randQuest].checkResponse(response);
