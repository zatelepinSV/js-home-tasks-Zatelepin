'use strict'


function interviewQuestion(job) {
  if (job === 'designer') {
    return function (name) {
      return (name + ' can you please explain what UX design is?');
    };
  } else if (job === 'teacher') {
    return function (name) {
      return ('What subject do you teach ' + name + '?');
    };
  } else if (job === 'other') {
    return function (name) {
      return ('Hello ' + name + ', what do you do?');
    };
  }
}

console.log(interviewQuestion('designer')('John'));