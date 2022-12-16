'use strict';

var wrapper = document.getElementById('wrapper');
var deg = 6;

create(wrapper);
var nmb = document.getElementById('numberWrapper');
var arrows = document.getElementById('arrowWrapper');
var dgtlClock = document.getElementById('digitalClock');
var watchCircleCentrX = wrapper.offsetWidth / 2 - 4;
var watchCircleCentrY = wrapper.offsetHeight / 2 - 4;

createNumbers(nmb);
createStrelkaSec(arrows);
createStrelkaMin(arrows);
createStrelkaHour(arrows);
createCenterCircle(arrows);
createTimeCifr(dgtlClock);
setInterval(time,1000);

var str = document.getElementById('strSec');
var strMin = document.getElementById('strMin');
var strHour = document.getElementById('strH');
var timeCif = document.getElementById('cifra');

function create(arg) {
  var numberWrapper = document.createElement('div');
  numberWrapper.id = 'numberWrapper';
  arg.appendChild(numberWrapper);
  var arrowWrapper = document.createElement('div');
  arrowWrapper.id = 'arrowWrapper';
  arg.appendChild(arrowWrapper);
  var digitalClock = document.createElement('div');
  digitalClock.id = 'digitalClock';
  arg.appendChild(digitalClock);

}

function createNumbers(arg) {
  for (var k = 1; k <= 12; k++ ) {
    var number = document.createElement('div');
    arg.appendChild(number);
    var degrees = (30 * k) / 180 * Math.PI;
    var x = (watchCircleCentrX - 25) + Math.round(Math.sin(degrees) * watchCircleCentrX / 1.2);
    var y = (watchCircleCentrY - 25) - Math.round(Math.cos(degrees) * watchCircleCentrY / 1.2);
    number.className = 'number';
    number.style.position = 'absolute';
    number.style.top =  y + 'px';
    number.style.left = x + 'px';
    number.innerText = k.toString();
  }
  for (var q = 1; q <= 60; q++ ) {
    var degreesPuntos = (deg * q) / 180 * Math.PI;
    var points = document.createElement('div');
    arg.appendChild(points);
    var puntosX = (watchCircleCentrX - 0.5) + Math.round(Math.sin(degreesPuntos) * watchCircleCentrX / 1.05);
    var puntosY = (watchCircleCentrY - 0.5) - Math.round(Math.cos(degreesPuntos) * watchCircleCentrY / 1.05);
    points.className = 'points';
    points.style.position = 'absolute';
    points.style.top = puntosY + 'px';
    points.style.left = puntosX + 'px';
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

function createTimeCifr(time) {
  var timeCifr = document.createElement('div');
  timeCifr.style.width = '150px';
  timeCifr.style.height = '50px';
  timeCifr.id = 'cifra';
  time.appendChild(timeCifr);
  timeCifr.style.position = 'absolute';
  timeCifr.style.top = (watchCircleCentrY - timeCifr.clientHeight * 2) + 'px';
  timeCifr.style.left = (watchCircleCentrX - timeCifr.clientWidth / 2) + 'px';
}

function createStrelkaMin(center) {
  var strelka = document.createElement('div');
  strelka.style.width = '4px';
  strelka.style.height = '250px';
  strelka.className = 'str';
  strelka.id = 'strMin';
  center.appendChild(strelka);
  strelka.style.top = (watchCircleCentrY - strelka.clientHeight / 2) + 'px';
  strelka.style.left = (watchCircleCentrX - strelka.clientWidth / 2) + 'px';
  strelka.style.position = 'absolute';
}

function createStrelkaHour(center) {
  var strelkaHour = document.createElement('div');
  strelkaHour.style.width = '8px';
  strelkaHour.style.height = '200px';
  strelkaHour.className = 'str';
  strelkaHour.id = 'strH';
  center.appendChild(strelkaHour);
  strelkaHour.style.top = (watchCircleCentrY - strelkaHour.clientHeight / 2) + 'px';
  strelkaHour.style.left = (watchCircleCentrX - strelkaHour.clientWidth / 2) + 'px';
  strelkaHour.style.position = 'absolute';
}

function createStrelkaSec(center) {
  var StrelkaSec = document.createElement('div');
  StrelkaSec.style.width = '2px';
  StrelkaSec.style.height = '300px';
  StrelkaSec.className = 'strelkaSec';
  StrelkaSec.id = 'strSec';
  center.appendChild(StrelkaSec);
  StrelkaSec.style.top = (watchCircleCentrY - StrelkaSec.clientHeight / 2) + 'px';
  StrelkaSec.style.left = (watchCircleCentrX - StrelkaSec.clientWidth / 2) + 'px';
  StrelkaSec.style.position = 'absolute';
}

function time() {
  var time = new Date();
  var seconds = time.getSeconds();
  var mins = time.getMinutes();
  var hour = time.getHours();
  var secondsDegrees = ((seconds / 60) * 360);
  var minutesDegrees = ((mins /60) * 360) + ((seconds / 60) * deg);
  var hoursDegrees = ((hour / 12) * 360) + ((mins / 60) * 30);
  str.style.transform = 'rotate(' + secondsDegrees + 'deg)';
  strMin.style.transform = 'rotate(' + minutesDegrees + 'deg)';
  strHour.style.transform = 'rotate(' + hoursDegrees + 'deg)';
  timeCif.innerHTML = parseTime(hour) + ':' + parseTime(mins) + ':' + parseTime(seconds);
  function parseTime(n) {
    if(n < 10) {
      n = '0' + n;
    }
    return n;
  }
}