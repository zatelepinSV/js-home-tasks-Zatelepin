'use strict';


var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

function anClean(arg) {
  var result = {};
  for (var k = 0; k < arg.length; k++) {
    var word = arg[k].toLowerCase().split('').sort().join('');
    result[word] = arg[k];
  }
  return Object.values(result);
}

console.log(anClean(arr));


/* Version 2
var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

function anClean(arg) {
  var arrayToCompare = [];
  var result = [];
  for (var k = 0; k < arg.length; k++) {
    var word = arg[k].toLowerCase().split('').sort().join('');
    if (arrayToCompare.indexOf(word) < 0) {
      arrayToCompare.push(word);
      result.push(arg[k]);
    }
  }
  return result;
}

console.log(anClean(arr));
*/
