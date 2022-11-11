'use strict'

/*var obj = {
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
console.log(obj);*/

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

/* Version #3 (без мутации)
var obj = {
  className: 'menu menu my menu menu menu my menu my menu menu',
};
var objNew;

function removeClass(objectName, inputClasName) {

  var objBroke = objectName.className.split(' ');
  if (objBroke.includes(inputClasName) === true) {
    objNew = Object.assign({}, objectName);
    do {
      var position = objBroke.indexOf(inputClasName);
      objBroke.splice(position,1);
    } while (objBroke.includes(inputClasName) === true);
  } else {
    console.log('input class not found');
    obj.className = objBroke.join(' ');
    return obj;
  }
  objNew.className = objBroke.join(' ');
  return objNew;
}

console.log(removeClass(obj,'menu'));
*/

/* version #3.1 - этот вариант не совсем подходит, т.к. удаляются ВСЕ одинаковые слова,
если надо удалить ВСЕ дублирования - то этот вариант прям то что надо)

var obj = {
  className: 'menu menu my menu menu menu menu menu menu'
};
var objNew;

function removeClass(objectName, dellValue) {
  objNew = Object.assign({}, objectName);
  var brokeObj = objNew.className.split(' ');
  var newMassive = new Set(brokeObj);
  newMassive = Array.from(newMassive);
  var position = newMassive.indexOf(dellValue);
  newMassive.splice(position,1);
  objNew.className = newMassive.join(' ');

  return objNew;
}
removeClass(obj,'menu');
console.log(obj);
console.log(objNew);
*/


/* Version #4
var obj = {
  className: 'menu menu my menu menu menu my menu menu my menu'
};
var objNewM;

function removeClass(objectName, dellValue) {
  objNewM = Object.assign({}, objectName);
  var objNew = objNewM.className.split(' ');
  objNew.forEach(function(item, i) {
    if (item === dellValue) {
      delete objNew[i];
    }
  });
  objNew = objNew.filter(Boolean);
  objNewM.className = objNew.join(' ');
  return objNewM;
}
removeClass(obj,'menu');
console.log(obj);
console.log(objNewM);
*/

