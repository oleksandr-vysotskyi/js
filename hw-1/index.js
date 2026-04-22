// #dYQNrB
// Створити змінні. Присвоїти кожному з них значення: ‘hello’,’owu’,’com’, ‘ua’, 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
let greeting = "Hello";
let name = "Owu";
let domain = "com";
let country = "ua";
let a1 = 1;
let b1 = 10;
let c1 = -999;
let d = 123;
const E = 3.14;
const F = 2.7;
const G = 16;
const booleanT = true;
const booleanF = false;
console.log(
  greeting,
  name,
  domain,
  country,
  a1,
  b1,
  c1,
  d,
  E,
  F,
  G,
  booleanT,
  booleanF
);

// #6Qb97gsv
// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З’єднати їх в одну змінну person (Не об’єкт, просто за допомогою конкатенації)
const firstName = "Oleksandr";
const middleName = "Valeriyovych";
const lastName = "Vysotskyi";
let person = firstName + " " + middleName + " " + lastName;
console.log(person);

// #4N0y5tufA
// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = ‘100’; let c = true;
let a = 100;
let b = "100";
let c = true;
console.log(typeof a, typeof b, typeof c);

// #ruUtWDUI
// За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імʼям, По-батькові та роками. Та вивести в консоль
let getName = prompt("Enter your name");
console.log(getName);
let getMiddleName = prompt("Enter your middle name");
console.log(getMiddleName);
let getAge = prompt("Enter your age");
console.log(getAge);