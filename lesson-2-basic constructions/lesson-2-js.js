'use strict'

var line = prompt('введите строку или слово', '');

function findVowels() {
  var count = 0;
  const vowels = ['а', 'и', 'е', 'ё', 'о', 'у', 'ы', 'э', 'ю', 'я', 'a', 'e', 'i', 'o', 'u', 'y'];

  for (var char of line.toLowerCase()) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }
  return count;
}

console.log(findVowels());