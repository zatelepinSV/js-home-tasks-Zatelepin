'use strict';
(function () {
  const gameWrapper = document.getElementById('wrapper');
  const fieldWidthX = 800; // длина поля
  const fieldHeightY = 500; // ширина поля
  const racketWidthX = 10; // ширина ракетки
  const racketHeightY = 100; // длина ракетки
  const ballSize = 30; // размер мяча


  function createGame() {
    gameWrapper.appendChild(createStartBtn());
    gameWrapper.appendChild(score.createScore());
    gameWrapper.appendChild(field.fieldCreate());
    ball.ballCreate();
    rocket.createRocket('player1', racketWidthX);
    rocket.createRocket('player2', fieldWidthX);
    document.getElementById('startBtn').addEventListener("click", function () {
      console.log('click')
      ball.speedX = random(-25, 25);
      ball.speedY = random(-10, 10);
    })
  }

  function createStartBtn() {
    var inpt = document.createElement('input');
    inpt.type = 'button';
    inpt.id = 'startBtn';
    inpt.value = 'Start!';
    inpt.style.cursor = 'pointer';
    return inpt;
  }

  var score = {
    player1: 0,
    player2: 0,
    createScore() {
      var score = document.createElement('div');
      score.id = 'score';
      score.style.textAlign = 'center';
      score.style.fontSize = '30px';
      score.style.fontWeight = 'bold';
      score.innerHTML = this.player1 + " : " + this.player2;
      return score;
    },
    update() {
      var scoreGame = document.getElementById('score');
      scoreGame.innerHTML = this.player1 + " : " + this.player2;
    },
  }

  var field = {
    width: fieldWidthX,
    height: fieldHeightY,
    fieldCreate() {
      var fld = document.createElement('div');
      fld.id = 'gameField';
      fld.style.width = this.width + "px";
      fld.style.height = this.height + "px";
      fld.style.background = '#eaeaa6';
      fld.style.position = 'relative';
      return fld;
    },
  }

  var ball = {
    size: ballSize,
    posX: fieldWidthX / 2 - 30 / 2,
    posY: fieldHeightY / 2 - 30 / 2,
    speedX: 0,
    speedY: 0,
    width: ballSize,
    height: ballSize,
    ballCreate() {
      var gameBall = document.getElementById('gameField');
      var ball = document.createElement('div');
      ball.id = 'ball'
      ball.style.width = this.size + 'px';
      ball.style.height = this.size + 'px';
      ball.style.background = 'black';
      ball.style.borderRadius = '50%';
      ball.style.position = 'absolute';
      ball.style.top = this.posY + 'px'
      ball.style.left = this.posX + 'px';
      gameBall.appendChild(ball);
      return ball;
    },
    update() {
      var ballObj = document.getElementById('ball');
      ballObj.style.left = this.posX + "px";
      ballObj.style.top = this.posY + "px";
    },
  }

  var rocket = {
    width: fieldWidthX,
    height: fieldHeightY,
    createRocket(player, left) {
      var field = document.getElementById('gameField');
      var rocket = document.createElement('div');
      rocket.id = player;
      rocket.style.position = 'absolute';
      rocket.style.top = fieldHeightY / 2 - racketHeightY / 2 + 'px';
      rocket.style.width = racketWidthX + 'px';
      rocket.style.height = racketHeightY + 'px';
      rocket.style.backgroundColor = 'red';
      rocket.style.left = left - racketWidthX + 'px';
      field.appendChild(rocket);
    },
  }

  function Racket(player) {
    this.position = fieldHeightY / 2 - racketHeightY / 2;
    this.width = racketWidthX;
    this.height = racketHeightY;
    this.moove = 0;
    this.update = function () {
      var racketObj = document.getElementById(player);
      racketObj.style.top = this.position + "px";
      racketObj.style.width = this.width + "px";
      racketObj.style.height = this.height + "px";
    }
  }

  var player1 = new Racket('player1');
  var player2 = new Racket('player2');

  window.addEventListener('load', init);

  function init() {
    createGame();
    setInterval(startGame, 40);
  }

  function startGame() {
    player1.update();
    player2.update();
    ball.update();
    score.update();

//движения ракеток
    document.addEventListener('keydown', function (event) {
      switch (event.code) {
        case 'ShiftLeft':
          player1.moove = -8;
          break;
        case 'ArrowUp':
          player2.moove = -8;
          break;
        case 'ControlLeft':
          player1.moove = +8;
          break;
        case 'ArrowDown':
          player2.moove = +8;
          break;
      }
    });

    document.addEventListener('keyup', function (event) {
      switch (event.code) {
        case 'ShiftLeft':
          player1.moove = 0;
          break;
        case 'ArrowUp':
          player2.moove = 0;
          break;
        case 'ControlLeft':
          player1.moove = 0;
          break;
        case 'ArrowDown':
          player2.moove = 0;
          break;
      }
    });

    if (player1.position + player1.height + player1.moove <= field.height &&
      player1.position + player1.moove >= 0) {
      player1.position += player1.moove;
    }
    if (player2.position + player2.height + player2.moove <= field.height &&
      player2.position + player2.moove >= 0) {
      player2.position += player2.moove;
    }

    ball.posY += ball.speedY; //запуска мяча по Y
    ball.posX += ball.speedX; //запуск мяча по X

    if (ball.posY <= 0) {  //не даём вылететь мячу выше поля
      ball.speedY = -ball.speedY;
      ball.posY = 0;
    }

    if (ball.posY >= field.height - ball.size) { //не даём вылететь мячу ниже поля
      ball.speedY = -ball.speedY;
      ball.posY = field.height - ball.size;
    }
    //отбивание мяча вторым игроком
    if (ball.posY > player2.position - ballSize && ball.posY < player2.position + racketHeightY) {
      if (ball.posX >= fieldWidthX - ball.size - player2.width) {
        ball.speedX = -ball.speedX;
        ball.posX = field.width - ball.width - player2.width;
      }
    }

    //отбивание мяча первым игроком
    if (ball.posY > player1.position - ballSize && ball.posY < player1.position + racketHeightY) {
      if (ball.posX < 0 + player2.width) {
        ball.speedX = -ball.speedX;
        ball.posX = 0 + player2.width;
      }
    }

    if (ball.posX > fieldWidthX - ball.size) { //если мячик не попал по ракетке - засчитываем поражение
      gameOver("player2");
      ball.posX = field.width - ball.width;
    } else if (ball.posX < 0) {
      gameOver("player1");
      ball.posX = 0;
    }

  }

  function gameOver(player) { //обновляем счет и останавливаем скорость
    ball.speedX = 0;
    ball.speedY = 0;
    if (player === "player1") {
      score.player2 += 1;
      score.update();
    } else {
      score.player1 += 1;
      score.update();
    }
  }

  function random(min, max) {
    do {
      var number = Math.floor(Math.random() * (max + 1 - min)) + min;
    } while (number === 0);
    allCentred() //отцентровываем ракетки и мячик
    ball.update();
    return number;
  }

  function allCentred() {
    ball.posX = fieldWidthX / 2 - ballSize / 2;
    ball.posY = fieldHeightY / 2 - ballSize / 2;
    player1.position = fieldHeightY / 2 - racketHeightY / 2;
    player2.position = fieldHeightY / 2 - racketHeightY / 2;
  }
})();