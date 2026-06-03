// #I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами, а й би
const calcSquare = (aNum, bNum) => aNum * bNum;

console.log(calcSquare(5, 10));


// #ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r
const roundSquare = (radius) => Math.PI * radius * radius

console.log(roundSquare(5));

// #Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
const roundCylinder = (radius, height) => 2 * Math.PI * radius * height

console.log(roundCylinder(5, 10));

// #SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент
const printArr = (arr) => {
    arr.forEach((item) => console.log(item))
    // for (const item of arr) {
    //     console.log(item)
    // }
}

printArr(['1', '2', '3', '4', '5', '6', '7', '8', '9']);

// #59g0IsA
// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
const createParagraph = (text) => document.write(`<p>${text}</p>`);

createParagraph('This is a paragraph');

// #hOL6126
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент усім однаковий
const createList = (text) =>
    document.write(`<ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                   </ul>`)

createList('This is a list');

// #0yocto1edSN
// – створити функцію, яка створює ul з елементами li. Текст li задати через аргумент усім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
const crateListItems = (text, count) => {
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

crateListItems('This is a list', 5);


// #gEFoxMMO
// – створити функцію, яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список (ul li) та виводить його через document.write
const createListOfPrims = (arr) => {
    document.write(`<ul>`)
    //------using forEach-------
    arr.forEach((item) => document.write(`<li>${item}</li>`));

    //-------using for of ------
    // for (const item of arr) {
    //     document.write(`<li>${item}</li>`)
    // }

    //-------using for-----
    // for(let i =0; i < arr.length; i++) {
    //     document.write(`<li>${arr[i]}</li>`)
    // }

    //------ using while ----
    // let i = 0;
    // while (i < arr.length) {
    //     document.write(`<li>${arr[i]}</li>`)
    //     i++
    // }
    document.write(`</ul>`)
}

const primsArr = [1, '2', true, '3', false, '4', 5, '6', '7', '8', '9'];
createListOfPrims(primsArr);

// #bovDJDTIjt
// – створити функцію, яка приймає масив об’єктів з наступними полями id, name, age, та виводить їх у документ. Для кожного об’єкту окремий блок.
const createListOfUsers = (arr) => {
    document.write(`<ul>`)
    arr.forEach((item) => document.write(`<li> ${item.id} ${item.name} ${item.age}</li>`))
    document.write(`</ul>`)
}

const usersArr = [
    {name: 'vasyl', age: 31, id: 1},
    {name: 'petya', age: 30, id: 4},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olia', age: 28, id: 7},
    {name: 'max', age: 30, id: 20},
    {name: 'anya', age: 31, id: 22},
    {name: 'oleg', age: 28, id: 40},
    {name: 'andrey', age: 29, id: 100},
    {name: 'masha', age: 30, id: 200},
    {name: 'olia', age: 31, id: 25},
    {name: 'max', age: 31, id: 30}
]

createListOfUsers(usersArr);

// #pghbnSB
// – створити функцію, яка повертає найменьше число з масиву
let numbersArr = [100, -200, 300, 400, 5];

let findMinNum = (arr) => Math.min(...arr);

console.log(findMinNum(numbersArr));

findMinNum = (arr) => {
    let minNum = arr[0];
    for (let number of arr) {
        if (number < minNum) {
            minNum = number;
        }
    }
    return minNum;
}

console.log(findMinNum(numbersArr));

findMinNum = (arr) => {
    return arr.reduce((acc, curr) => {
        if (curr < acc) {
            return curr;
        }
        return acc;
    })
}

console.log(findMinNum(numbersArr));

findMinNum = (arr) => arr.reduce((acc, curr) => curr < acc ? curr : acc);

console.log(findMinNum(numbersArr));

// #EKRNVPM
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
numbersArr = [1, 2, 10];

let sum = (arr) => arr.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum(numbersArr));

sum = (arr) => {
    let total = 0;
    for (const number of arr) {
        // скорочений запис: додає number до total і збереже результат назад у total
        total += number;
        // розгорнутий запис: total + number і присвоїть результат змінній total
        // total = total + number;
    }
    return total;
}

console.log(sum(numbersArr));

// #kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексу
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
numbersArr = [11, 22, 33, 44];

let swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

console.log(swap(numbersArr, 0, 1));

// #mkGDenYnNjn.html
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400
const currencyValues = [
    {currency: 'USD', value: 43.9694},
    {currency: 'EUR', value: 51.5014}
];

let exchange = (sumUah, currencyValues, exchangeCurrency) => {
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            console.log(currency.currency, currency.value);
            return (sumUah / currency.value).toFixed();
        }
    }
    console.log(`${exchangeCurrency} is not a valid currency.`);
    return null;
}

console.log(exchange(10000, currencyValues, 'EUR'));