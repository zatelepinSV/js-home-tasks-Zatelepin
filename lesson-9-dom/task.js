'use strict';


function THashStorage() {
  var allDrinks = {};

  this.addValue = function (key, value) {
    allDrinks[key] = value;
  }

  this.getValue = function () {
    return Object.keys(allDrinks);
  }

  this.getKeys = function (key) {
    return allDrinks[key];
  }

  this.deleteValue = function (key) {
    delete allDrinks[key];
  }

  this.check = function (arg) {
    if (Object.keys(allDrinks).includes(arg)) {
      return true;
    }
  }

}