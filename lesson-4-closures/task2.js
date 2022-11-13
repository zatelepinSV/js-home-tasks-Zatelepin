'use strict'

var obj = {
  className: 'my menu menu menu menu my menu'
};

function removeClassNameFromString(objectName, word) {
  var massiv = objectName.className.split(' ');
  for (var k = 0; k < massiv.length; k++) {
    if (massiv[k] === word) {
      massiv.splice(k, 1);
      k--;
    }
  }
  obj.className = massiv.join(' ');
  return obj;
}
removeClassNameFromString(obj,'blabla');
console.log(obj);

/* Version #2 (без мутации)
var obj = {
  className: 'menu menu my menu menu menu my menu my menu menu'
};
var objNew;

function removeClassNameFromString(objectName, dellValue) {
  objNew = Object.assign({}, objectName);
  var brokeObj = objNew.className.split(' ');
  brokeObj = brokeObj.filter(el => el !== dellValue);
  objNew.className = brokeObj.join(' ');

  return objNew;
}
removeClassNameFromString(obj,'menu');
console.log(obj);
console.log(objNew);
*/

/* Version #3 (без мутации)
var obj = {
  className: 'menu menu my menu menu menu my menu my menu menu',
};
var objNew;

function removeClassNameFromString(objectName, inputClasName) {

  var objBroke = objectName.className.split(' ');
  if (objBroke.includes(inputClasName)) {
    objNew = Object.assign({}, objectName);
    do {
      var position = objBroke.indexOf(inputClasName);
      objBroke.splice(position,1);
    } while (objBroke.includes(inputClasName));
  } else {
    objNew = null;
    obj.className = objBroke.join(' ');
    return obj;
  }
  objNew.className = objBroke.join(' ');
  return objNew;
}

console.log(removeClassNameFromString(obj,'menu'));
*/

/* version #3.1 - этот вариант не совсем подходит, т.к. удаляются ВСЕ одинаковые слова,
если надо удалить ВСЕ дублирования - то этот вариант прям то что надо)

var obj = {
  className: 'menu menu my menu menu menu menu menu menu'
};
var objNew;

function removeClassNameFromString(objectName, dellValue) {
  objNew = Object.assign({}, objectName);
  var brokeObj = objNew.className.split(' ');
  var newMassive = new Set(brokeObj);
  newMassive = Array.from(newMassive);
  var position = newMassive.indexOf(dellValue);
  newMassive.splice(position,1);
  objNew.className = newMassive.join(' ');

  return objNew;
}
removeClassNameFromString(obj,'menu');
console.log(obj);
console.log(objNew);
*/

/* Version #4
var obj = {
  className: 'menu menu my menu menu menu my menu menu my menu'
};
var objNewCopy;

function removeClassNameFromString(objectName, dellValue) {
  objNewCopy = Object.assign({}, objectName);
  var objNew = objNewCopy.className.split(' ');
  objNew.forEach(function(item, i) {
    if (item === dellValue) {
      delete objNew[i];
    }
  });
  objNew = objNew.filter(Boolean);
  objNewCopy.className = objNew.join(' ');
  return objNewCopy;
}
removeClassNameFromString(obj,'menu');
console.log(obj);
console.log(objNewCopy);
*/

/* Version #5
var obj = {
  className: 'menu menu my menu my menu my menu'
};
var objNew;

removeClassNameFromString(obj, 'blabla');

function removeClassNameFromString(objectName, dellValue) {
  var newMass = [];
  objNew = Object.assign({}, objectName);
  var brokeObj = objNew.className.split(' ');
  if (brokeObj.includes(dellValue)) {
    brokeObj.forEach((elm) => {
      if (brokeObj.includes(elm) && elm !== dellValue) {
        newMass.push(elm);
        objNew.className = newMass.join(' ');
      }
    });
  } else {
    objNew = null;
    return objectName;
  }
  return objNew;
}
console.log(objNew);
console.log(obj);
*/