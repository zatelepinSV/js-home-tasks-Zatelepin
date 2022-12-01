'use strict';

(function () {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function (ans, arg) {
    if (ans === this.correct) {
      console.log('Correct answer!');
      points = arg('trueAns');
    } else {
      console.log('Wrong answer. Try again :)');
      points = arg('wrong');
    }
    this.showPoints(points);
  }
  Question.prototype.showPoints = function (arg) {
    console.log('Points: ' + arg);
  }

  var q1 = new Question('Is JavaScript the coolest programming language in the world?',
    ['Yes', 'No'],
    0);
  var q2 = new Question('What is the name of this course\'s teacher?',
    ['John', 'Micheal', 'Jonas'],
    2);
  var q3 = new Question('What does best describe coding?',
    ['Boring', 'Hard', 'Fun', 'Tediuos'],
    2);

  function total() {

    return function (ansQuest) {
      if (ansQuest === 'trueAns') {
        points++;
      }
      return points;
    }
  }

  var points = 0;
  var questions = [q1, q2, q3];

  function repeat() {
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    var answer = prompt('Please select the correct answer.');
    if (answer.toLowerCase() !== 'exit') {
      questions[n].checkAnswer(parseInt(answer), total());
      repeat();
    }
  }

  repeat();

})();

/* Version 2
(function () {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function (ans, func) {

    if (parseInt(ans) === this.correct) {
      console.log('Correct answer!');
      points = func('nice');
    } else if (ans === 'exit') {
      console.log('Bye-bye');
    } else {
      console.log('Wrong answer. Try again :)');
      points = func('notNice');
    }
    return this.showPoints(points);
  }

  Question.prototype.showPoints = function (arg) {
    console.log('Points: ' + arg);
  }

  var q1 = new Question('Is JavaScript the coolest programming language in the world?',
    ['Yes', 'No'],
    0);

  var q2 = new Question('What is the name of this course\'s teacher?',
    ['John', 'Micheal', 'Jonas'],
    2);

  var q3 = new Question('What does best describe coding?',
    ['Boring', 'Hard', 'Fun', 'Tediuos'],
    2);

  var points = 0;
  var questions = [q1, q2, q3];
  function total() {
    return function (ansQuest) {
      if (ansQuest === 'nice') {
        points++;
      }
      return points;
    }
  }
  var finalCountdown = total();
  do {
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    var answer = prompt('Please select the correct answer.');
    questions[n].checkAnswer(answer, finalCountdown);
  } while (answer.toLowerCase() !== 'exit');

})();*/
