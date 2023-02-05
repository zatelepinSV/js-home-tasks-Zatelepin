'use strict';

function TLocalStorage(name) {

  var storage = {};

  this.reset = () => {
    if (localStorage.getItem(name) !== null) {
      storage = JSON.parse(localStorage.getItem(name));
      return storage;
    }
  };

  this.addValue = function (key, value) {
    storage[key] = value;
    localStorage.setItem(name, JSON.stringify(storage));
  };

  this.getValue = function (key) {
    return storage[key];
  };

  this.deleteKey = function (key) {
    delete storage[key];
    localStorage.setItem(name, JSON.stringify(storage));
  };

  this.getKeys = function () {
    return Object.keys(storage);
  };

  this.check = function (arg) {
    return Object.keys(storage).includes(arg);
  }
  this.reset();
}