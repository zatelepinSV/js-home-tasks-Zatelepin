'use strict'

var obj = {
  className: 'my menu menu menu menu my menu'
};

function removeClass(objectName, word) {
  var massiv = objectName.className.split(' ');
  for (var k = 0; k < massiv.length; k++) {
    if (massiv[k] === word) {
      console.log(massiv[k] + ' покинул чат');
      massiv.splice(k, 1);
      k--;
    }
  }
  obj.className = massiv.join(' ');
  return obj;
}
removeClass(obj,'menu');
console.log(obj);


/* Version #2
var obj = {
  className: 'menu menu my menu menu menu my menu my menu menu'
};
var objNew;

function removeClass(objectName, dellValue) {
  var copy = Object.assign({}, objectName);
  var brokeObj = copy.className.split(' ');
  brokeObj = brokeObj.filter(el => el !== dellValue);
  copy.className = brokeObj.join(' ');
  objNew = copy;

  return objNew;
}
removeClass(obj,'menu');
console.log(obj);
console.log(objNew);
*/

/* version #2.1
var obj = {
  name: 'menu menu my menu menu menu menu menu menu'
};
var objNew;

function removeClass(objectName, dellValue) {
  var copy = Object.assign({}, objectName);
  var brokeObj = copy.name.split(' ');
  var newMassive = new Set(brokeObj);
  newMassive = Array.from(newMassive);
  var position = newMassive.indexOf(dellValue);
  newMassive.splice(position,1);
  copy.name = newMassive.join(' ');
  objNew = copy;

  return objNew;
}
removeClass(obj,'menu');
console.log(obj);
console.log(objNew);
*/

