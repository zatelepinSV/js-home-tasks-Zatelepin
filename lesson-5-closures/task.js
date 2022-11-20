'use strict'


var john = {
  prices: [124, 48, 268, 180, 42],
  johnsTips: [],
  johnsBillPlusTips: [],
  pays: function (arg) {
    var tips = 0;
    var billAndTips = 0;
    for (var k = 0; k < arg.length; k++) {
      if (arg[k] < 50) {
        tips = arg[k] * 20 / 100;
        billAndTips = arg[k] + tips;
        this.johnsTips.push(tips);
        this.johnsBillPlusTips.push(billAndTips);
      } else if (arg[k] > 50 && arg[k] < 200) {
        tips = arg[k] * 15 / 100;
        this.johnsTips.push(tips);
        billAndTips = arg[k] + tips;
        this.johnsBillPlusTips.push(billAndTips);
      } else {
        tips = arg[k] * 10 / 100;
        billAndTips = arg[k] + tips;
        this.johnsTips.push(tips);
        this.johnsBillPlusTips.push(billAndTips);
      }
    }
  },
};
var mark = {
  prices: [77, 375, 110, 45],
  marksTips: [],
  marksBillPlusTips: [],
  pays: function (arg) {
    var tips = 0;
    var billAndTips = 0;
    for (var k = 0; k < arg.length; k++) {
      if (arg[k] < 100) {
        tips = arg[k] * 20 / 100;
        billAndTips = arg[k] + tips;
        this.marksTips.push(tips);
        this.marksBillPlusTips.push(billAndTips);
      } else if (arg[k] > 100 && arg[k] < 300) {
        tips = arg[k] * 10 / 100;
        this.marksTips.push(tips);
        billAndTips = arg[k] + tips;
        this.marksBillPlusTips.push(billAndTips);
      } else {
        tips = arg[k] * 25 / 100;
        billAndTips = arg[k] + tips;
        this.marksTips.push(tips);
        this.marksBillPlusTips.push(billAndTips);
      }
    }
  },
};

function average (arrayToAverage) {
  var average;
  var result = 0;
  for (var k = 0; k < arrayToAverage.length; k++) {
    result += arrayToAverage[k];
    average = k;
  }
  result /= (average + 1);
  return result.toFixed(2);
}

john.pays(john.prices);
mark.pays(mark.prices);

if (average(john.johnsTips) > average(mark.marksTips)) {
  console.log('Джон просадил больше');
} else {
  console.log('Марк просадил больше');
}

/* Version #2
var john = {
  prices: [124, 48, 268, 180, 42],
  johnsTips: [],
  johnsBillPlusTips: [],
  pays: function (arg) {
    var tips = 0;
    var billAndTips = 0;
    for (var k = 0; k < arg.length; k++) {
      if (arg[k] < 50) {
        tips = arg[k] * 20 / 100;
        billAndTips = arg[k] + tips;
        this.johnsTips.push(tips);
        this.johnsBillPlusTips.push(billAndTips);
      } else if (arg[k] > 50 && arg[k] < 200) {
        tips = arg[k] * 15 / 100;
        this.johnsTips.push(tips);
        billAndTips = arg[k] + tips;
        this.johnsBillPlusTips.push(billAndTips);
      } else {
        tips = arg[k] * 10 / 100;
        billAndTips = arg[k] + tips;
        this.johnsTips.push(tips);
        this.johnsBillPlusTips.push(billAndTips);
      }
    }
    return this.average(this.johnsTips);
  },
  average: function (arg) {
    var average;
    var result = 0;
    for (var k = 0; k < this.johnsTips.length; k++) {
      result += arg[k];
      average = k;
    }
    result /= (average + 1);
    return result;
  },
};

var mark = {
  prices: [77, 375, 110, 45],
  marksTips: [],
  marksBillPlusTips: [],
  pays: function (arg) {
    var tips = 0;
    var billAndTips = 0;
    for (var k = 0; k < arg.length; k++) {
      if (arg[k] < 100) {
        tips = arg[k] * 20 / 100;
        billAndTips = arg[k] + tips;
        this.marksTips.push(tips);
        this.marksBillPlusTips.push(billAndTips);
      } else if (arg[k] > 100 && arg[k] < 300) {
        tips = arg[k] * 10 / 100;
        this.marksTips.push(tips);
        billAndTips = arg[k] + tips;
        this.marksBillPlusTips.push(billAndTips);
      } else {
        tips = arg[k] * 25 / 100;
        billAndTips = arg[k] + tips;
        this.marksTips.push(tips);
        this.marksBillPlusTips.push(billAndTips);
      }
    }
    return this.average(this.marksTips);
  },
  average: function (arg) {
    var average;
    var result = 0;
    for (var k = 0; k < this.marksTips.length; k++) {
      result += arg[k];
      average = k;
    }
    result /= (average + 1);
    return result;
  },
};

if (mark.pays(mark.prices) > john.pays(john.prices)) {
  console.log('Марк просадил больше ');
} else {
  console.log('Джон просадил больше ');
}
console.log(john);
console.log(mark);
*/
