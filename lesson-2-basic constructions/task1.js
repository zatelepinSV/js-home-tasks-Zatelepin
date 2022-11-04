'use strict'

var line = prompt('введите строку или слово', '');

function findVowels() {
  var count = 0;
  const vowels = ['а', 'и', 'е', 'ё', 'о', 'у', 'ы', 'э', 'ю', 'я'];
  for (var char of line.toLowerCase()) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }
  return count;
}
console.log(findVowels());

/* V#2
var line = prompt('введите строку или слово', '');

function vowelsCount(line) {
  const vowels = ['а', 'и', 'е', 'ё', 'о', 'у', 'ы', 'э', 'ю', 'я'];
  var count = 0;
  line = line.toLowerCase();
  for (var i = 0; i < line.length; i++) {
    var letter = line[i];
    var pos = vowels.indexOf(letter);
    if (pos >= 0) {
      count = count + 1;
    }
  }
  return count;
}
console.log(vowelsCount(line));
*/
