'use strict';

(function () {
  var wrapper = document.getElementById('wrapper');
  var deg = 6;

  createClockContainer(wrapper);

  function createClockContainer(container) {
    var numberWrapper = document.createElement('div');
    numberWrapper.id = 'numberWrapper';
    container.appendChild(numberWrapper);
    var arrowWrapper = document.createElement('div');
    arrowWrapper.id = 'arrowWrapper';
    container.appendChild(arrowWrapper);
    var digitalClock = document.createElement('div');
    digitalClock.id = 'digitalClockWrapper';
    container.appendChild(digitalClock);
  }

  var nmb = document.getElementById('numberWrapper');
  var arrows = document.getElementById('arrowWrapper');
  var dgtlClock = document.getElementById('digitalClockWrapper');
  var watchCircleCentrX = wrapper.offsetWidth / 2 - 4; // 4 это бордер
  var watchCircleCentrY = wrapper.offsetHeight / 2 - 4;

  createNumbers(nmb);
  createArrowSeconds(arrows);
  createArrowMinutes(arrows);
  createArrowHour(arrows);
  createCenterCircle(arrows);
  createTimeDigital(dgtlClock);
  setInterval(setTime, 1000);

  var arrowSeconds = document.getElementById('arrSec');
  var ArrowMinutes = document.getElementById('arrMin');
  var arrowHours = document.getElementById('arrH');
  var timeDigital = document.getElementById('digitalTime');

  function createNumbers(container) {
    for (var k = 1; k <= 12; k++) {
      var number = document.createElement('div');
      container.appendChild(number);
      var degrees = (30 * k) / 180 * Math.PI;
      var x = (watchCircleCentrX - 25) + Math.round(Math.sin(degrees) * watchCircleCentrX / 1.2);
      var y = (watchCircleCentrY - 25) - Math.round(Math.cos(degrees) * watchCircleCentrY / 1.2);
      number.className = 'number';
      number.style.position = 'absolute';
      number.style.top = y + 'px';
      number.style.left = x + 'px';
      number.innerText = k.toString();
    }
    for (var q = 1; q <= 60; q++) {
      var degreesDots = (deg * q) / 180 * Math.PI;
      var dots = document.createElement('div');
      container.appendChild(dots);
      var dotsX = (watchCircleCentrX - 0.5) + Math.round(Math.sin(degreesDots) * watchCircleCentrX / 1.05);
      var dotsY = (watchCircleCentrY - 0.5) - Math.round(Math.cos(degreesDots) * watchCircleCentrY / 1.05);
      dots.className = 'dots';
      dots.style.position = 'absolute';
      dots.style.top = dotsY + 'px';
      dots.style.left = dotsX + 'px';
    }
  }

  function createCenterCircle(centerCircle) {
    var littleCircle = document.createElement('div');
    littleCircle.style.width = '20px';
    littleCircle.style.height = '20px';
    littleCircle.style.background = '#ffda89';
    littleCircle.style.borderRadius = '50%';
    littleCircle.style.zIndex = '20';
    centerCircle.appendChild(littleCircle);
    littleCircle.style.position = 'absolute';
    littleCircle.style.top = (watchCircleCentrY - littleCircle.clientHeight / 2) + 'px';
    littleCircle.style.left = (watchCircleCentrX - littleCircle.clientWidth / 2) + 'px';
  }

  function createTimeDigital(time) {
    var digitalTime = document.createElement('div');
    digitalTime.style.width = '150px';
    digitalTime.style.height = '50px';
    digitalTime.id = 'digitalTime';
    time.appendChild(digitalTime);
    digitalTime.style.position = 'absolute';
    digitalTime.style.top = (watchCircleCentrY - digitalTime.clientHeight * 2) + 'px';
    digitalTime.style.left = (watchCircleCentrX - digitalTime.clientWidth / 2) + 'px';
  }

  function createArrowMinutes(center) {
    var arrowMinutes = document.createElement('div');
    arrowMinutes.style.width = '4px';
    arrowMinutes.style.height = '250px';
    arrowMinutes.id = 'arrMin';
    center.appendChild(arrowMinutes);
    arrowMinutes.style.top = (watchCircleCentrY - arrowMinutes.clientHeight / 2) + 'px';
    arrowMinutes.style.left = (watchCircleCentrX - arrowMinutes.clientWidth / 2) + 'px';
    arrowMinutes.style.position = 'absolute';
  }

  function createArrowHour(center) {
    var arrowHour = document.createElement('div');
    arrowHour.style.width = '8px';
    arrowHour.style.height = '200px';
    arrowHour.id = 'arrH';
    center.appendChild(arrowHour);
    arrowHour.style.top = (watchCircleCentrY - arrowHour.clientHeight / 2) + 'px';
    arrowHour.style.left = (watchCircleCentrX - arrowHour.clientWidth / 2) + 'px';
    arrowHour.style.position = 'absolute';
  }

  function createArrowSeconds(center) {
    var arrowSeconds = document.createElement('div');
    arrowSeconds.style.width = '2px';
    arrowSeconds.style.height = '300px';
    arrowSeconds.id = 'arrSec';
    center.appendChild(arrowSeconds);
    arrowSeconds.style.top = (watchCircleCentrY - arrowSeconds.clientHeight / 2) + 'px';
    arrowSeconds.style.left = (watchCircleCentrX - arrowSeconds.clientWidth / 2) + 'px';
    arrowSeconds.style.position = 'absolute';
  }

  function setTime() {
    var time = new Date();
    var seconds = time.getSeconds();
    var minutes = time.getMinutes();
    var hours = time.getHours();
    var secondsDegrees = ((seconds / 60) * 360);
    var minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * deg);
    var hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30);
    arrowSeconds.style.transform = 'rotate(' + secondsDegrees + 'deg)';
    ArrowMinutes.style.transform = 'rotate(' + minutesDegrees + 'deg)';
    arrowHours.style.transform = 'rotate(' + hoursDegrees + 'deg)';
    timeDigital.innerHTML = parseTime(hours) + ':' + parseTime(minutes) + ':' + parseTime(seconds);

    function parseTime(n) {
      if (n < 10) {
        n = '0' + n;
      }
      return n;
    }
  }
})();