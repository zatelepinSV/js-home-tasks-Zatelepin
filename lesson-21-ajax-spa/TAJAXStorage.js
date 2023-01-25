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
      success: DataLoaded,
      error: ErrorHandler,
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

  function DataLoaded(data) {

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
        success: InsertData,
        error: ErrorHandler,
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
      success: Blocking,
      error: ErrorHandler,
    });

    function Blocking(data) {
      if (data.error !== undefined) {
        console.log(data.error);
        console.log('234234');
        console.log(pass)
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
      success: DataUpdate,
      error: ErrorHandler,
    });
  }

  this.storeStorage();
}

function InsertData(data) {
  console.log(data.result);
}

function DataUpdate(data) {
  if (data.error !== undefined) {
    console.log(data.error);
  }
}

function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
  console.log(StatusStr + ' ' + ErrorStr);
}