'use strict'


var obj = {
  className: 'my menu menu menu menu my menu'
};

function removeClassNameFromString(object, word) {
  var array = object.className.split(' ');
  for (var k = 0; k < array.length; k++) {
    if (array[k] === word) {
      array.splice(k, 1);
      k--;
    }
  }
  obj.className = array.join(' ');
  return obj;
}
removeClassNameFromString(obj,'menu');
console.log(obj);

/* Version #2 (без мутации)
var obj = {
  className: 'menu menu my menu menu menu my menu my menu menu'
};
var objCopy;

function removeClassNameFromString(object, dellValue) {
  objCopy = Object.assign({}, object);
  var stringToArray = objCopy.className.split(' ');
  stringToArray = stringToArray.filter(el => el !== dellValue);
  objCopy.className = stringToArray.join(' ');

  return objCopy;
}
removeClassNameFromString(obj,'menu');
console.log(obj);
console.log(objCopy);
*/

/* Version #3 (без мутации)
var obj = {
  className: 'menu menu my menu menu menu my menu my menu menu',
};
var objCopy;

function removeClassNameFromString(object, inputClasName) {

  var strToArr = object.className.split(' ');
  if (strToArr.includes(inputClasName)) {
    objCopy = Object.assign({}, object);
    do {
      var position = strToArr.indexOf(inputClasName);
      strToArr.splice(position,1);
    } while (strToArr.includes(inputClasName));
  } else {
    objCopy = null;
    obj.className = strToArr.join(' ');
    return obj;
  }
  objCopy.className = strToArr.join(' ');
  return objCopy;
}

console.log(removeClassNameFromString(obj,'menu'));
*/

/* version #3.1 - этот вариант не совсем подходит, т.к. удаляются ВСЕ одинаковые слова,
если надо удалить ВСЕ дублирования - то этот вариант прям то что надо)

var obj = {
  className: 'menu menu my menu menu menu menu menu menu'
};
var objCopy;

function removeClassNameFromString(object, dellValue) {
  objCopy = Object.assign({}, object);
  var objValToArray = objCopy.className.split(' ');
  var newArray = new Set(objValToArray);
  newArray = Array.from(newArray);
  var position = newArray.indexOf(dellValue);
  newArray.splice(position,1);
  objCopy.className = newArray.join(' ');

  return objCopy;
}
removeClassNameFromString(obj,'menu');
console.log(obj);
console.log(objCopy);
*/

/* Version #4
var obj = {
  className: 'menu menu my menu menu menu my menu menu my menu'
};
var objCopy;

function removeClassNameFromString(objectName, dellValue) {
  objCopy = Object.assign({}, objectName);
  var newArray = objCopy.className.split(' ');
  newArray.forEach(function(item, i) {
    if (item === dellValue) {
      delete newArray[i];
    }
  });
  newArray = newArray.filter(Boolean);
  objCopy.className = newArray.join(' ');
  return objCopy;
}
removeClassNameFromString(obj,'menu');
console.log(obj);
console.log(objCopy);
*/

/* Version #5
var obj = {
  className: 'menu menu my menu my menu my menu'
};
var objCopy;

removeClassNameFromString(obj, 'menu');

function removeClassNameFromString(object, dellValue) {
  var newArr = [];
  objCopy = Object.assign({}, object);
  var objValueToArr = objCopy.className.split(' ');
  if (objValueToArr.includes(dellValue)) {
    objValueToArr.forEach((elm) => {
      if (objValueToArr.includes(elm) && elm !== dellValue) {
        newArr.push(elm);
        objCopy.className = newArr.join(' ');
      }
    });
  } else {
    objCopy = null;
    return obj;
  }
  return objCopy;
}
console.log(objCopy);
console.log(obj);
*/