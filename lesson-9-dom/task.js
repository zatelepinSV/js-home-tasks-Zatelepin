'use strict';


function THashStorage() {
  var allDrinks = {};

  this.addValue = function (key, value) {
    if (this.check(key) === true) {
      alert('Такое уже есть!)');
    } else {
      allDrinks[key] = value;
      alert('Напиток добавлен! ' + key);
    }
  }

  this.getValue = function () {
    return Object.keys(allDrinks);
  }

  this.getKeys = function (key) {
    var arrInfo = allDrinks[key];
    if (this.check(key) === true) {
      return 'Напиток: ' + '<b>' + arrInfo[0] + '</b><br>' +
        'Алкогольный: ' + '<b>' + arrInfo[1] + '</b><br>' +
        'Состав: ' + '<b>' + arrInfo[2] + '</b>';
    } else {
      alert('такого напитка нет!!!');
      return 'Напитки: ' + '<b>' + Object.keys(allDrinks) + '</b>';
    }
  }

  this.deleteValue = function (key) {
    if (this.check(key) === true) {
      delete allDrinks[key];
      alert('напиток ' + key + ' успешно удалён!');
    } else {
      alert('такого напитка нет!!!');
    }
  }

  this.check = function (arg) {
    var checkDrink;
    for (var k = 0; k < Object.keys(allDrinks).length; k++) {
      if (Object.keys(allDrinks)[k] === arg) {
        checkDrink = Object.keys(allDrinks)[k];
      }
    }
    if (checkDrink === arg) {
      return true;
    }
  }

}