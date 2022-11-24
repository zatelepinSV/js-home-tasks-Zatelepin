'use strict'


function interviewQuestion(job) {
  return function (name) {
    if (job === 'designer') {
      return (name + ' can you please explain what UX design is?');
    } else if (job === 'teacher') {
      return ('What subject do you teach ' + name + '?');
    } else if (job === 'other') {
      return ('Hello ' + name + ', what do you do?');
    }
  };
}

console.log(interviewQuestion('teacher')('John'));

/* version #2 (решил, что лучше задекларировать 1 ф-цию и там уже эта функция решает что делать,
чем декларировать 3 функции которые делают тоже самое)

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
*/