'use strict';

(function () {
  var cvs = document.getElementById('CVA');
  var context = cvs.getContext('2d');
  var deg = 6; // градусы для секундной стрелки и для кружочков
  var radians = Math.PI / 180;
  var watchCenterX = 300;
  var watchCenterY = 300;
  var watchRadius = 200;
  var arrowHourHeight = 100;
  var arrowMinutesHeight = 130;
  var arrowSecondsHeight = 160;
  var secondsDegrees = 0;
  var minutesDegrees = 0;
  var hoursDegrees = 0;
  var timeDigital = '--:--:--';

  createWatch();

  function createWatch() {
    cvs.width = 600; //перерисовываем саму канву
    cvs.height = 600;
    createMainCircle();//рисуем циферблат
    createTimeDigital();//рисуем циферблат
//рисуем цифры
    for (var k = 1; k <= 12; k++) {
      var numberDegrees = 30 * k * radians;
      var numberX = watchCenterX + Math.sin(numberDegrees) * watchCenterX / 1.8;
      var numberY = watchCenterY - Math.cos(numberDegrees) * watchCenterY / 1.8;
      context.beginPath();
      context.fillStyle = '#B77DD4';
      context.font = 'bold 30px Roboto';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(k, numberX, numberY);
    }

//рисуем секундные кружки
    for (var l = 1; l <= 60; l++) {
      var dotsDegrees = deg * l * radians;
      var dotX = watchCenterX + Math.sin(dotsDegrees) * watchCenterX / 1.6;
      var dotY = watchCenterY - Math.cos(dotsDegrees) * watchCenterY / 1.6;
      context.beginPath();
      context.arc(dotX, dotY, 1, 0, Math.PI * 2, true);
      context.fillStyle = 'red';
      context.fill();
    }
    createArrow(arrowHourHeight, hoursDegrees, '#B77DD4',8);//рисуем часовую стрелку
    createArrow(arrowMinutesHeight, minutesDegrees, '#B77DD4', 4); //рисуем минутную
    createArrow(arrowSecondsHeight, secondsDegrees, 'yellow', 2); //рисуем секундную
    createLittleYellowCircleInCenter(); //риуем маленький желтый кружок в центре
  }

//рисуем циферблат
  function createMainCircle() {
    context.beginPath();
    context.strokeStyle = '#B77DD4';
    context.fillStyle = 'black';
    context.lineWidth = 4;
    context.arc(watchCenterX, watchCenterY, watchRadius, 0, Math.PI * 2, true);
    context.shadowColor = '#B77DD4';
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowBlur = 100;
    context.fill();
    context.stroke();
    context.closePath();
  }
//тут стрелки
  function createArrow(arrHeight, arrDegrees, color, arrWidth) {
    var rotationX = watchCenterX + arrHeight * Math.cos(Math.PI / 2 - arrDegrees * (Math.PI / 180));
    var rotationY = watchCenterY - arrHeight * Math.sin(Math.PI / 2 - arrDegrees * (Math.PI / 180));
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = arrWidth;
    context.lineCap = 'round';
    context.moveTo(watchCenterX, watchCenterY);
    context.lineTo(rotationX, rotationY);
    context.stroke();
    context.closePath();
  }

//рисуем желтый кружок в центре
  function createLittleYellowCircleInCenter() {
    context.beginPath();
    context.arc(watchCenterX,watchCenterY, 10, 0, Math.PI*2, true);
    context.fillStyle='yellow';
    context.fill();
    context.closePath();
  }
//тут электронные часы
  function createTimeDigital() {
    context.beginPath();
    context.shadowColor = 'transparent';
    context.fillStyle = 'red';
    context.font = 'bold 30px Roboto';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(timeDigital, watchCenterX, 240); //местоположение электронных часов
    context.fill();
    context.closePath();
  }

  setInterval(getTime, 1000);

  function getTime() {
    var time = new Date();
    var seconds = time.getSeconds();
    var minutes = time.getMinutes();
    var hours = time.getHours();
    secondsDegrees = ((seconds / 60) * 360);
    minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * deg);
    hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30);
    timeDigital = parseTime(hours) + ':' + parseTime(minutes) + ':' + parseTime(seconds);

    createWatch();

    function parseTime(n) {
      if (n < 10) {
        n = '0' + n;
      }
      return n;
    }
  }
})();