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


/*
version 2 (необычная, работает только для доски (m*n), где m=n )
var size = parseInt(prompt('размер ','')) /2;
var rowOdd = '#' + ' ';
var rowEven = ' ' + '#';
var board = '';
for (var e = 0; e < size; e++) {
  if ((size * 2) % 2 === 0) {
    board += rowOdd.repeat(size) + '\n';
    board += rowEven.repeat(size) + '\n';
  } else {
    board += rowOdd.repeat(Math.ceil(size));
    board = board.slice(0, -1) + '\n';
    board += rowEven.repeat(Math.ceil(size));
    board = board.slice(0, -1) + '\n';
    if (board.length > (size + size) * (size + size)) {
      board = board.slice(0, -size * 2 - 1);
    }
  }
}
console.log(board);
*/
