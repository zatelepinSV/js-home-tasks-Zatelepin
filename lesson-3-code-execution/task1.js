'use strict'

var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};

function salarySearch(argument) {
  var key = '';
  var meaning = 0;
  for (var k in argument) {
    if (meaning < argument[k]) {
      meaning = argument[k];
      key = k;
    }
  }
  return meaning + ' ' + key;
}

console.log(salarySearch(tasksCompleted));