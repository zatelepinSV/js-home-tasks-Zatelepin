'use strict'

var obj = {
  name: 'serg andr ant egor ant'
};

function fff(qqq, slovo) {
  var mass = qqq.name.split(' ');
  for (var k = 0; k < mass.length; k++) {
    if (mass[k] === slovo) {
      console.log(mass[k] + ' покинул чат');
      mass.splice(k, 1);
    }
  }

  obj.name = mass.join(' ');

  return obj;
}
fff(obj,'ant');
console.log(obj);