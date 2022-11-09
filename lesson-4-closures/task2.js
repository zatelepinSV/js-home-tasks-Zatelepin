'use strict'

/*
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
*/


/* Version #2 (без мутации)
var obj = {
  className: 'menu menu my menu menu menu my menu my menu menu'
};
var objNew;

function removeClass(objectName, dellValue) {
  objNew = Object.assign({}, objectName);
  var brokeObj = objNew.className.split(' ');
  brokeObj = brokeObj.filter(el => el !== dellValue);
  objNew.className = brokeObj.join(' ');

  return objNew;
}
removeClass(obj,'menu');
console.log(obj);
console.log(objNew);
*/

/* version #2.1 - этот вариант не совсем подходит, т.к. удаляются ВСЕ одинаковые слова,
если надо удалить все дублирования - то этот вариант прям то что надо)

var obj = {
  name: 'menu menu my menu menu menu menu menu menu'
};
var objNew;

function removeClass(objectName, dellValue) {
  objNew = Object.assign({}, objectName);
  var brokeObj = objNew.name.split(' ');
  var newMassive = new Set(brokeObj);
  newMassive = Array.from(newMassive);
  var position = newMassive.indexOf(dellValue);
  newMassive.splice(position,1);
  objNew.name = newMassive.join(' ');

  return objNew;
}
removeClass(obj,'menu');
console.log(obj);
console.log(objNew);
*/