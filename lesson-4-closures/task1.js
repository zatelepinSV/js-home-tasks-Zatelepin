'use strict'

var line = '';
var numberOfLines = parseInt(prompt('введите количество строк','8'));
var characters = parseInt(prompt('введите количество символов в строке','8'));
for (var k = 0; k < numberOfLines; k++) {
  for (var t = 0; t < characters; t++) {
    if ((t + k) % 2 === 0) {
      line += '#';
    } else {
      line += ' ';
    }
  }
  line += '\n';
}

console.log(line);