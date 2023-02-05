'use strict';

function TAJAXStorage() {
  var link = 'http://fe.it-academy.by/AjaxStringStorage2.php';
  var storage = {};

  function init() {

    $.ajax({
      url: link,
      type: 'POST',
      cache: false,
      data: {
        f: 'READ',
        n: 'sergey',
      },
      success: dataLoaded,
      error: errorHandler,
    });
  }

  this.addValue = function (key, value) {
    storage[key] = value;
    update(storage);

  };

  this.getValue = function (key) {
    return storage[key];
  };

  this.deleteKey = function (key) {
    delete storage[key];
    update(storage);
  };

  this.getKeys = function () {
    return Object.keys(storage);
  };

  this.check = function (arg) {
    return Object.keys(storage).includes(arg);
  };

  function dataLoaded(data) {
    if (data !== '') {
      storage = JSON.parse(data.result);
    } else {
      $.ajax({
        url: link,
        type: 'POST',
        cache: false,
        data: {
          f: 'INSERT',
          n: 'sergey',
          v: JSON.stringify(storage),
        },
        success: insertData,
        error: errorHandler,
      });
    }
  }

  function update(storage) {
    var pass = Math.random();
    $.ajax({
      url: link,
      type: 'POST',
      data: {
        f: 'LOCKGET',
        n: 'sergey',
        p: pass,
      },
      cache: false,
      success: onDataUpdateSuccess,
      error: errorHandler,
    });

    $.ajax({
      url: link,
      type: 'POST',
      data: {
        f: 'UPDATE',
        n: 'sergey',
        v: JSON.stringify(storage),
        p: pass,
      },
      cache: false,
      success: dataUpdate,
      error: errorHandler,
    });
  }

  init();
}

function onDataUpdateSuccess(data) {
  if (data.error !== undefined) {
    console.log(data.error);
  }
}

function insertData(data) {
  console.log(data.result);
}

function dataUpdate(data) {
  if (data.error !== undefined) {
    console.log(data.error);
  }
}

function errorHandler(jqXHR, StatusStr, ErrorStr) {
  console.log(StatusStr + ' ' + ErrorStr);
}