'use strict'

var obj = {
  className: 'my menu menu'
};

function removeClass(qqq, word) {
  var massiv = qqq.className.split(' ');
  for (var k = 0; k <= massiv.length; k++) {
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
console.log(obj);