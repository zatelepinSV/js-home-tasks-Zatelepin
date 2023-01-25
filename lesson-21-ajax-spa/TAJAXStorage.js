'use strict';

function TAJAXStorage() {
  var link = 'http://fe.it-academy.by/AjaxStringStorage2.php';
  var pass;
  var storage = {};

  this.storeStorage = () => {

    $.ajax({
      url: link,
      type: 'POST',
      cache: false,
      data: {
        f: 'READ',
        n: 'DRINK'
      },
      success: dataLoaded,
      error: errorHandler,
    });
  };

  this.addValue = function (key, value) {
    storage[key] = value;
    reloadData(storage);

  };

  this.getValue = function (key) {
    return storage[key];
  };

  this.deleteKey = function (key) {
    delete storage[key];
    reloadData(storage);
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
          n: 'DRINK',
          v: JSON.stringify(storage),
        },
        success: insertData,
        error: errorHandler,
      });
    }
  }

  function reloadData(storage) {
    pass = Math.random();
    $.ajax({
      url: link,
      type: 'POST',
      data: {
        f: 'LOCKGET',
        n: 'DRINK',
        p: pass,
      },
      cache: false,
      success: blocking,
      error: errorHandler,
    });

    function blocking(data) {
      if (data.error !== undefined) {
        console.log(data.error);
      }
    }

    $.ajax({
      url: link,
      type: 'POST',
      data: {
        f: 'UPDATE',
        n: 'DRINK',
        v: JSON.stringify(storage),
        p: pass,
      },
      cache: false,
      success: dataUpdate,
      error: errorHandler,
    });
  }

  this.storeStorage();
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