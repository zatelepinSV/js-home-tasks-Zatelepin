'use strict'

var image = {
  width: 100,
  height: 400,
  title: 'Cool image'
};

function multiplyNumeric(argument) {
  var copy = Object.assign({}, argument);

  for (var k in copy) {
    if (typeof copy[k] === "number") {
      copy[k] *= 2;
    }
  }
  return copy
}

console.log(multiplyNumeric(image));