'use strict';


function THashStorage() {
  var allDrinks = {};

  this.addValue = function (key, value) {
    allDrinks[key] = value;
  }

  this.getKeys = function () {
    return Object.keys(allDrinks);
  }

  this.getValue = function (key) {
    return allDrinks[key];
  }

  this.deleteKey = function (key) {
    delete allDrinks[key];
  }

  this.check = function (arg) {
    if (Object.keys(allDrinks).includes(arg)) {
      return true;
    }
  }

}