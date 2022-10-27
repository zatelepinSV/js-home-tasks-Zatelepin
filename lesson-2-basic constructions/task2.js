'use strict'

var lastName = prompt('Ваша фамилия?', '');
while (isNaN(lastName) === false || typeof lastName !=='string' || lastName.length > 15) {
  lastName = prompt('Что-то пошло не так, введите ещё раз Вашу фамилию','');
}
var firstName = prompt('Ваше имя?', '');
while (isNaN(firstName) === false || typeof firstName !=='string' || firstName.length > 15) {
  firstName = prompt('Что-то пошло не так, введите ещё раз Ваше имя','');
}
var secondName = prompt('Ваше отчество?', '');
while (isNaN(secondName) === false || typeof secondName !=='string'|| secondName.length > 15) {
  secondName = prompt('Что-то пошло не так, введите ещё раз Ваше отчество','');
}
var age = parseInt(prompt('Сколько вам лет?', ''));
while (isNaN(age) || (age > 100 || age < 0)) {
  age = parseInt(prompt('Попробуйте ещё разок)', ''));
}
var gender = confirm('Ваш пол - мужской?');
var fullName = 'Ваше ФИО: ' + lastName + ' ' + firstName + ' ' + secondName;
var ageInYears = 'Ваш возраст в годах: ' + age;
var ageInDays = 'Ваш возраст в днях: ' + (age * 365);
var inFiveYears = 'Через 5 лет вам будет: ' + (age + 5);

if (gender) {
  gender = 'Ваш пол: мужской';
} else {
  gender = 'Ваш пол: женский';
}

var pension;

if (age >= 60) {
  pension = 'Вы на пенсии: Да';
} else {
  pension = 'Вы на пенсии: Нет';
}
var form = fullName + "\n" + ageInYears + "\n" + ageInDays + "\n" + inFiveYears + "\n" + gender + "\n" + pension;

alert(form);



/* V#2 кривая - но работает)
do {
  var lastName = prompt('Ваша фамилия?', '');
  messages(lastName);
} while (isNaN(lastName) === false || typeof lastName !=='string' || lastName.length > 15);

do {
  var firstName = prompt('Ваше имя?', '');
  messages(firstName);
} while (isNaN(firstName) === false || typeof firstName !=='string' || firstName.length > 15);

do {
  var secondName = prompt('Ваше отчество?', '');
  messages(secondName);
} while (isNaN(secondName) === false || typeof secondName !=='string' (secondName.length > 15));

function messages(param) {
  if (isNaN(param) === false) {
    alert('Введите корректное значение');
  } else if (param.length > 15) {
    alert('Ведите не больше 15 символов!');
  }
}

do {
  var age = parseInt(prompt('Сколько вам лет?', ''));
  if (isNaN(age)) {
    alert('Введите корректное значение в цифрах');
  } else if (age > 100 || age < 0) {
    alert('Не обманывай!)');
  }
} while (isNaN(age) || (age > 100 || age < 0) );

var fullName = 'Ваше ФИО: ' + lastName + ' ' + firstName + ' ' + secondName;
var gender = confirm('Ваш пол - мужской?');
var ageInYears = 'Ваш возраст в годах: ' + age;
var ageInDays = 'Ваш возраст в днях: ' + age * 365;
var inFiveYears = 'Через 5 лет вам будет: ' + (age + 5);
var pension;

if (gender) {
  gender = 'Ваш пол: мужской';
} else {
  gender = 'Ваш пол: женский';
}

if (age >= 60) {
  pension = 'Вы на пенсии: Да';
} else {
  pension = 'Вы на пенсии: Нет';
}
var form = fullName + "\n" + ageInYears + "\n" + ageInDays + "\n" + inFiveYears + "\n" + gender + "\n" + pension;

alert(form);
*/
