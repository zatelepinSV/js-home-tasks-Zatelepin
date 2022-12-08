'use strict';


function THashStorage() {
  var storage = {};

  this.addValue = function (key, value) {
    storage[key] = value;
  }

  this.getValue = function (key) {
    return storage[key];
  }

  this.deleteKey = function (key) {
    delete storage[key];
  }

  this.getKeys = function () {
    return Object.keys(storage);
  }

  this.check = function (arg) {
    if (Object.keys(storage).includes(arg)) {
      return true;
    }
  }

}