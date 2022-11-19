'use strict'

function interviewQuestion(prof) {
  if (prof === 'designer') {
    return function (name) {
      return (name + ' can you please explain what UX design is?');
    };
  } else if (prof === 'teacher') {
    return function (name) {
      return ('What subject do you teach ' + name + '?');
    };
  } else if (prof === 'other') {
    return function (name) {
      return ('Hello ' + name + ', what do you do?');
    };
  }
}

console.log(interviewQuestion('designer')('John'));