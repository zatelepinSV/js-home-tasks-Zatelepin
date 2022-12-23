'use strict';

(function () {
  var cont = document.getElementById('wrapper');
  var width = cont.getAttributeNS(null, 'width');
  var height = cont.getAttributeNS(null, 'height');
  var watchCircleCenterX = width / 2; //центр по X
  var watchCircleCenterY = height / 2; //центр по Y
  var degreesDotsAndSecondArrow = 6; // градусы для секундной стрелки и для кружочков
  var degreesForNumber = 30; // градусы для цифр
  var url = "http://www.w3.org/2000/svg"; //урл
  var radians = Math.PI / 180;
  var startTime = '--:--:--'; //если электронные часы отключены
  var arrowHourHeight = 200; //длинна стрелок
  var arrowMinutesHeight = 160;
  var arrowSecondsHeight = 140;
  var arrowHourWidth = 8; //ширина стрелок
  var arrowMinutesWidth = 4;
  var arrowSecondsWidth = 2;

  createWatch();

  function createWatch() {
    createMainCircle(watchCircleCenterX, watchCircleCenterY); //рисуем аналоговые часы
    createTimeDigital(startTime); // рисуем элетронные

    //рисуем цифры
    for (var k = 1; k <= 12; k++) {
      var number = document.createElementNS(url, 'text');
      var degreesNumber = degreesForNumber * k * radians;
      var numberX = watchCircleCenterX + Math.sin(degreesNumber) * watchCircleCenterX / 1.8;
      var numberY = watchCircleCenterY - Math.cos(degreesNumber) * watchCircleCenterY / 1.8;
      number.setAttributeNS(null, "font-size", "30px");
      number.setAttributeNS(null, "x", numberX);
      number.setAttributeNS(null, "y", numberY);
      number.textContent = k.toString();
      number.setAttributeNS(null, "fill", "#B77DD4");
      number.setAttributeNS(null, "text-anchor", "middle");
      number.setAttributeNS(null, "dominant-baseline", "central");
      number.setAttributeNS(null, "font-weight", "bolder");
      cont.appendChild(number);
    }
    //рисуем кружочки
    for (var l = 1; l <= 60; l++) {
      var dot = document.createElementNS(url, 'circle');
      var degreesDots = degreesDotsAndSecondArrow * l * radians;
      var dotX = watchCircleCenterX + Math.sin(degreesDots) * watchCircleCenterX / 1.6;
      var dotY = watchCircleCenterY - Math.cos(degreesDots) * watchCircleCenterY / 1.6;
      dot.setAttributeNS(null, "cx", (dotX).toString());
      dot.setAttributeNS(null, "cy", (dotY).toString());
      dot.setAttributeNS(null, "r", "1");
      dot.setAttribute("fill", "red");
      cont.appendChild(dot);
    }
    createArrow("arrowHour", "#B77DD4", arrowHourHeight, arrowHourWidth);
    createArrow("arrowMinutes", "#B77DD4", arrowMinutesHeight, arrowMinutesWidth);
    createArrow("arrowSeconds", "yellow", arrowSecondsHeight, arrowSecondsWidth);
    createLittleCenterCircle();  //рисуем декоративный кружок в центре
  }

  function createMainCircle(CenterX, CenterY) {

    var circle = document.createElementNS(url, 'circle');
    circle.setAttribute("stroke", "#B77DD4");
    circle.setAttribute("stroke-width", "4")
    circle.setAttribute("fill", "black");
    circle.setAttribute("r", "200");
    circle.setAttribute("cx", CenterX);
    circle.setAttribute("cy", CenterY);
    cont.appendChild(circle);
  }

  function createTimeDigital(time) {
    var digitalTime = document.createElementNS(url, 'text');
    digitalTime.setAttributeNS(null, "font-size", "30px");
    digitalTime.setAttributeNS(null, "fill", "red");
    digitalTime.setAttributeNS(null, "x", watchCircleCenterX);
    digitalTime.setAttributeNS(null, "y", "240"); //высота для электронных часов по оси Y
    digitalTime.setAttributeNS(null, "text-anchor", "middle");
    digitalTime.setAttributeNS(null, "alignment-baseline", "central");
    digitalTime.id = "digital";
    digitalTime.innerHTML = time;
    cont.appendChild(digitalTime);
  }
  
  function createArrow(arrowId, color, arrowHeight, arrowWidth) {
    var arrow = document.createElementNS(url, 'line');
    arrow.setAttribute("x1", watchCircleCenterX);
    arrow.setAttribute("y1", watchCircleCenterY);
    arrow.setAttribute("x2", watchCircleCenterX);
    arrow.setAttribute("y2", arrowHeight);
    arrow.setAttribute("stroke", color);
    arrow.setAttribute("stroke-width", arrowWidth);
    arrow.setAttribute("stroke-linecap", "round");
    arrow.id = arrowId;
    cont.appendChild(arrow);
  }

  function createLittleCenterCircle() {
    var ltlCrcl = document.createElementNS(url, 'circle');
    ltlCrcl.setAttribute("fill", "yellow");
    ltlCrcl.setAttribute("r", "10");
    ltlCrcl.setAttribute("cx", watchCircleCenterX);
    ltlCrcl.setAttribute("cy", watchCircleCenterY);
    cont.appendChild(ltlCrcl);
  }

  var arrowSeconds = document.getElementById('arrowSeconds'); //находим элементы по айдишкам
  var arrowMinutes = document.getElementById('arrowMinutes');
  var arrowHours = document.getElementById('arrowHour');
  var timeDigital = document.getElementById('digital');

  setInterval(getTime, 1000);

  function getTime() {
    var time = new Date();
    var seconds = time.getSeconds();
    var minutes = time.getMinutes();
    var hours = time.getHours();
    var secondsDegrees = ((seconds / 60) * 360);
    var minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * degreesDotsAndSecondArrow);
    var hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30);

    arrowSeconds.setAttributeNS(null, "transform", 'rotate(' + secondsDegrees + ' ' + watchCircleCenterX + ' ' + watchCircleCenterY + ')');
    arrowMinutes.setAttributeNS(null, "transform", 'rotate(' + minutesDegrees + ' ' + watchCircleCenterX + ' ' + watchCircleCenterY + ')');
    arrowHours.setAttributeNS(null, "transform", 'rotate(' + hoursDegrees + ' ' + watchCircleCenterX + ' ' + watchCircleCenterY + ')');
    timeDigital.innerHTML = parseTime(hours) + ':' + parseTime(minutes) + ':' + parseTime(seconds);

    function parseTime(n) {
      if (n < 10) {
        n = '0' + n;
      }
      return n;
    }
  }
})();