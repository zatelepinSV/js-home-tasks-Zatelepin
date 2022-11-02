'use strict'

var valuesArray = [];

do {
  var values = parseInt(prompt('введите значение', ''));
  if (isNaN(values) === false) {
    valuesArray.push(values);
  }
} while (isNaN(values) === false);

/*
function summa (argument) {
  var result = 0;
  for (var k = 0; k < argument.length; k++) {
    result += argument[k];
  }
  return result;
}

console.log(summa(valuesArray));
*/

var summ = valuesArray.reduce(function (result, item) {
  return result + item;
});

console.log(summ);