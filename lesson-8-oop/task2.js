'use strict';

function isPal(arg) {
  var dellValue = ' ';
  arg = arg.toLowerCase().split('').filter(el => el !== dellValue).join('');
  var revString = arg.split('').reverse().join('');
  return arg === revString;
}

console.log(isPal('Anna'));
console.log(isPal('А роза упала на лапу Азора'));
console.log(isPal('Вася'));
console.log(isPal('12321'));
console.log(isPal('123212'));