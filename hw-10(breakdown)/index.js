// #sH8c4er
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

let element = document.createElement('div');
element.innerText = 'Hello World!';
element.setAttribute('id', 'text');

let button = document.createElement('button');
button.innerText = 'Click Me';
document.body.append(element, button);

button.onclick = function () {
    element.remove()
}

// #j693ca8
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

let form = document.createElement('form');
let input = document.createElement('input');
input.setAttribute('placeholder', 'Enter your age');
input.setAttribute('type', 'number');
let inputButton = document.createElement('button');
inputButton.innerText = 'Submit';

document.body.appendChild(form);
form.append(input, inputButton);


inputButton.onclick = function () {
    if (input.value < 18) {
        input.setCustomValidity('You must be 18 years old to sign up');
    } else {
        input.setCustomValidity('');
    }
    input.reportValidity();
}

// #ymAmN2xJ
// Створити форму з трьома полями для name, surname, age та кнопкою.
// При натисканні на кнопку зчитати дані з полів та вивести об’єкт у документ. Іншими словами: заповнили форму,
// натиснули кнопку, під формою з’явився блок з вашим об’єктом

let userForm = document.createElement('form');
let userNameInput = document.createElement('input');
let userLastNameInput = document.createElement('input');
let userAgeInput = document.createElement('input');
let userButton = document.createElement('button');
let userData = document.createElement('p');

userNameInput.setAttribute('placeholder', 'Enter your name');
userNameInput.setAttribute('type', 'text');

userLastNameInput.setAttribute('placeholder', 'Enter your last name');
userLastNameInput.setAttribute('type', 'text');


userAgeInput.setAttribute('placeholder', 'Enter your age');
userAgeInput.setAttribute('type', 'number');

userButton.innerText = 'Submit';

document.body.appendChild(userForm);
userForm.append(userNameInput, userLastNameInput, userAgeInput, userButton);

userButton.onclick = function (event) {
    event.preventDefault();
    let user = {name: userNameInput.value, lastName: userLastNameInput.value, age: userAgeInput.value};
    userData.innerText = `Name: ${user.name} Last name: ${user.lastName} Age: ${user.age}`;
    userForm.appendChild(userData)
}

// #2VaLt4vDczH
// є сторінка, на якій є блок, в якому знаходиться цифра. Написати код, який при кожному перезавантаженню сторінки
// буде додавати до неї +1
let someBlock = document.createElement('div');
document.body.appendChild(someBlock);

let count = +(localStorage.getItem('count') ?? 0);
count++;
someBlock.innerText = count;
localStorage.setItem('count', count);

// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище,
// у масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

let sessionList = JSON.parse(localStorage.getItem('sessionsList')) ?? [];

sessionList.push(new Date());
localStorage.setItem('sessionsList', JSON.stringify(sessionList));

// #Jg0gPO00
// створити конвертор ваги з кг у фунти. дані заповнюються через інпут.
// При уведенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let countInput = document.createElement('input');
countInput.setAttribute('type', 'number');
const resultDiv = document.createElement('div');
document.body.appendChild(countInput);


countInput.oninput = function (ev) {
    ev.preventDefault();
    resultDiv.innerText = `${+this.value} kg is ${+this.value * 2.20462} pounds`;
    document.body.appendChild(resultDiv);
}

// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт

function addToLocalStorage(arrayName, objToAdd) {
    let lsItem = localStorage.getItem(arrayName);
    if (!lsItem) {
        throw new Error('item not found');
    }
    const arr = JSON.parse(lsItem);
    if (typeof objToAdd === 'object') {
        arr.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(arr));
}

addToLocalStorage('sessionsList', {name: 'John', age: 25});

// #kUSgFqWY
// Створити 3 inputs та кнопку. Один визначає кількість рядків, другий – кількість комірок, третій – уміст комірок.
// При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним умістом.


let formForInputs = document.createElement('form');
let rowInput = document.createElement('input');
let cellInput = document.createElement('input');
let contentInput = document.createElement('input');
let formButton = document.createElement('button');
let table = document.createElement('table');

const config = [
    {element: formForInputs, attr: 'name', value: 'tableGeneratorForm'},
    {element: rowInput, attr: 'type', value: 'number'},
    {element: rowInput, attr: 'name', value: 'rowCount'},
    {element: rowInput, attr: 'placeholder', value: 'Enter number of rows'},
    {element: cellInput, attr: 'type', value: 'number'},
    {element: cellInput, attr: 'name', value: 'cellCount'},
    {element: cellInput, attr: 'placeholder', value: 'Enter number of cells'},
    {element: contentInput, attr: 'type', value: 'text'},
    {element: contentInput, attr: 'name', value: 'contentCount'},
    {element: contentInput, attr: 'placeholder', value: 'Enter cell content'},
    {element: formButton, attr: 'type', value: 'submit'},
    {element: table, attr: 'id', value: 'table'},
];

config.forEach(({element, attr, value}) => {
    element.setAttribute(attr, value);
});

formButton.innerText = 'Generate';
document.body.appendChild(formForInputs);
document.body.appendChild(table);
formForInputs.append(rowInput, cellInput, contentInput, formButton);

const tableLoc = document.getElementById('table');
const tableGeneratorForm = document.forms['tableGeneratorForm'];

tableGeneratorForm.onsubmit = function (event) {
    tableLoc.innerText = '';
    event.preventDefault();
    const rowValue = +rowInput.value;
    const cellValue = +cellInput.value;
    const dataValue = contentInput.value;
    console.log(rowValue, cellValue, dataValue);

    for (let i = 0; i < rowValue; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cellValue; j++) {
            const td = document.createElement('td');
            td.innerText = dataValue;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}