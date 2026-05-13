// #WpkK0ZH1

let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let stringArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
let mixedArr = [1, 2, 3, "a", "b", "c", true, false];
console.log(numberArr, stringArr, mixedArr);

// #4aDbSgh
// Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;

// перебрати його циклом while
while (i < arr.length) {
    console.log(arr[i]);
    i++
}

// перебрати його циклом for
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// перебрати циклом while та вивести числа тільки з непарним індексом
i = 0;
while (i < arr.length) {
    if (i % 2 !== 0) {
        console.log(`index:${[i]},value ${arr[i]}`);
    }
    i++
}

// перебрати циклом for та вивести числа тільки з непарним індексом
for (i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
        console.log(`index:${[i]},value ${arr[i]}`);
    }
}

// перебрати циклом while та вивести числа тільки парні значення
i = 0;
while (i < arr.length) {
    if (arr[i] % 2 === 0) {
        console.log(`index:${[i]},value ${arr[i]}`);
    }
    i++
}

// перебрати циклом for та вивести числа тільки парні значення
for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(`index:${[i]},value ${arr[i]}`);
    }
}

// замінити кожне число, кратне 3, на слово “okten”
for (i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        arr[i] = "okten";
        console.log(`index:${[i]},value ${arr[i]}`);
    }
}
// вивести масив у зворотньому порядку.
console.log(arr.reverse());


// ----------------------------- REVERSED CYCLE -----------------------------
//усі попередні завдання (окрім 8), але у зворотному циклі (задом наперед)
let reversedArr = arr.reverse();

// перебрати його циклом while
while (i < reversedArr.length) {
    console.log(reversedArr[i]);
    i++
}

// перебрати його циклом for
for (i = 0; i < reversedArr.length; i++) {
    console.log(reversedArr[i]);
}

// перебрати циклом while та вивести числа тільки з непарним індексом
i = 0;
while (i < reversedArr.length) {
    if (i % 2 !== 0) {
        console.log(`index:${[i]},value ${reversedArr[i]}`);
    }
    i++
}

// перебрати циклом for та вивести числа тільки з непарним індексом
for (i = 0; i < reversedArr.length; i++) {
    if (i % 2 !== 0) {
        console.log(`index:${[i]},value ${reversedArr[i]}`);
    }
}

// перебрати циклом while та вивести числа тільки парні значення
i = 0;
while (i < reversedArr.length) {
    if (reversedArr[i] % 2 === 0) {
        console.log(`index:${[i]},value ${reversedArr[i]}`);
    }
    i++
}

// перебрати циклом for та вивести числа тільки парні значення
for (i = 0; i < reversedArr.length; i++) {
    if (reversedArr[i] % 2 === 0) {
        console.log(`index:${[i]},value ${reversedArr[i]}`);
    }
}

// замінити кожне число, кратне 3, на слово “okten”
for (i = 0; i < reversedArr.length; i++) {
    if (reversedArr[i] % 3 === 0) {
        arr[i] = "okten";
        console.log(`index:${[i]},added value ${reversedArr[i]}`);
    }
}


// #yHAwJOyiC
// Створити масив з 10 числових елементів. Вивести в консоль усі його елементи в циклі.

const numArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (const num of numArr) {
    console.log(num);
}


// #GamKju89ob
// Створити масив з 10 строкових елементів. Вивести в консоль усі його елементи в циклі.

const strArr = ['10', 'string', 'number', 'boolean', 'undefined', 'null', 'js', 'ts', 'html', 'css'];
for (const str of strArr) {
    console.log(str);
}

// #Bm76xmg
// Створити масив з 10 елементів будь-якого типу. Вивести в консоль усі його елементи в циклі.

const anyArr = ['10', 10, false, true, undefined, 'null', 'js', 'ts', 'html', 'css'];
for (const any of anyArr) {
    console.log(any);
}

// #u3vmD0YJXh
// Створити масив з 10 елементів числового, стрічкового та булевого типу. За допомогою if та typeof вивести тільки булеві елементи

const mixArr = ['10', 10, false, true, false, true, 'js', 'ts', 'html', 'css'];
for (const item of mixArr) {
    if (typeof item === "boolean") {
        console.log(item, 'boolean');
    }
}


// #9stMq2ou
// Створити масив з 10 елементів числового, стрічкового та булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (const item of mixArr) {
    if (typeof item === "number") {
        console.log(item, 'number');
    }
}

// Створити масив з 10 елементів числового, стрічкового та булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (const item of mixArr) {
    if (typeof item === "string") {
        console.log(item, 'string');
    }
}

// #0pm3EyTKy9
// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль усі його елементи в циклі.

let emptyArr = [];
emptyArr[0] = 42;
emptyArr[1] = '1'
emptyArr[2] = false;
emptyArr[3] = undefined;
emptyArr[4] = 42;
emptyArr[5] = true;
emptyArr[6] = 42;
emptyArr[7] = '23';
emptyArr[8] = null;
emptyArr[9] = 22;

for (let i = 0; i < emptyArr.length; i++) {
    console.log(emptyArr[i]);
}

for (const item of emptyArr) {
    console.log(item);
}

let j = 0
while (j < emptyArr.length) {
    console.log(emptyArr[j]);
    j++;
}

emptyArr.forEach((item) => console.log(item))

// #mDMWMW5a
// – Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i <= 10; i++) {
    console.log(i)
    document.write(`<p>${i}</p>`)
}

// #4sXhaa5YMM
// – Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i <= 100; i++) {
    console.log(i)
    document.write(`<div>${i}</div>`)
}


// #s24slNyz7

// – Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 2; i <= 100; i++) {
    console.log(i)
    document.write(`<article>${i}</article>`)
}

// #zananT5FR1
// – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
        document.write(`<article>${i}</article>`)
    }
}


// #Tfrwls7FM

// – Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
        document.write(`<article>${i}</article>`)
    }
}


// #reLkOkTB29Q
//
// створити масив книжок (назва, кількість сторінок, автори, жанри).
const books = [
    {
        name: "The Lord of the Rings",
        pages: 1178,
        authors: ["J.R.R. Tolkien"],
        genre: ["Fantasy", "Adventure", "Epic", "Classic"]
    },
    {
        name: "Good Omens",
        pages: 432,
        authors: ["Terry Pratchett", "Neil Gaiman"],
        genre: ["Fantasy", "Comedy", "Urban Fantasy"]
    },
    {
        name: "Dune",
        pages: 617,
        authors: ["Frank Herbert"],
        genre: ["Science Fiction", "Adventure", "Politics", "Philosophy"]
    },
    {
        name: "The Name of the Rose",
        pages: 512,
        authors: ["Umberto Eco"],
        genre: ["Historical Fiction", "Mystery", "Philosophical Novel"]
    },
    {
        name: "Frankenstein",
        pages: 280,
        authors: ["Mary Shelley"],
        genre: ["Gothic", "Horror", "Science Fiction"]
    },
    {
        name: "Steve Jobs",
        pages: 656,
        authors: ["Walter Isaacson"],
        genre: ["Biography", "Nonfiction", "Business", "Technology"]
    },
    {
        name: "The Pragmatic Programmer",
        pages: 352,
        authors: ["Andrew Hunt", "David Thomas"],
        genre: ["Programming", "Education", "Nonfiction"]
    },
    {
        name: "1984",
        pages: 328,
        authors: ["George Orwell"],
        genre: ["Dystopian", "Fiction", "Political Satire"]
    },
    {
        name: "The Silent Patient",
        pages: 336,
        authors: ["Alex Michaelides"],
        genre: ["Psychological Thriller", "Mystery"]
    },
    {
        name: "Clean Code",
        pages: 464,
        authors: ["Robert C. Martin"],
        genre: ["Nonfiction", "Programming"]
    }
];

// – знайти найбільшу книжку.
let maxPages = 0;
let biggestBook = null;
for (const book of books) {
    if (book.pages > maxPages) {
        maxPages = book.pages
        biggestBook = book
    }
}
console.log(biggestBook, 'the biggest book');

// – знайти книжку/ки з найбільшою кількістю жанрів
let maxGenres = 0;
let mostGenresBooks = [];
for (const book of books) {
    if (book.genre.length > maxGenres) {
        maxGenres = book.genre.length;
    }
}
for (const book of books) {
    if (book.genre.length === maxGenres) {
        mostGenresBooks.push(book)
    }
}
console.log(mostGenresBooks, 'the most genres books');

// – знайти книжку/ки з найдовшою назвою
let maxNames = 0;
let longestNameBooks = [];
for (const book of books) {
    if (book.name.length > maxNames) {
        maxNames = book.name.length
    }
}
for (const book of books) {
    if (book.name.length === maxNames) {
        longestNameBooks.push(book)
    }
}
console.log(longestNameBooks, 'the longest books');

// – знайти книжку/ки, які писали 2 автори
let twoAuthorsBook = [];
for (const book of books) {
    if (book.authors.length === 2) {
        twoAuthorsBook.push(book)
    }
}
console.log(twoAuthorsBook, 'two authors books');

// – знайти книжку/ки, які писав 1 автор
let singleAuthorsBook = [];
for (const book of books) {
    if (book.authors.length === 1) {
        singleAuthorsBook.push(book)
    }
}
console.log(singleAuthorsBook, 'single authors books');

// 1. Створити пустий масив та :

// a. заповнити його 50 парними числами за допомоги циклу.
emptyArr = [];
for (let i = 0; i < 50; i++) {
    if (i % 2 === 0) {
        emptyArr.push(i)
    }
}
console.log(emptyArr, 'the even numbers');

// b. заповнити його 50 непарними числами за допомоги циклу.
emptyArr = [];
for (let i = 0; i < 50; i++) {
    if (i % 2 !== 0) {
        emptyArr.push(i)
    }
}
console.log(emptyArr, 'the odd numbers');

emptyArr = [];
// c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    emptyArr.push(Math.floor(Math.random() * 100));
}
console.log(emptyArr, 'the random numbers');

emptyArr = [];
// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
const min = 8;
const max = 732;
for (let i = 0; i < 20; i++) {
    emptyArr.push(Math.floor(Math.random() * (max - min)) + min);
}
console.log(emptyArr, 'the numbers from 8 to 732');

// 2. Вивести за допомогою console.log кожен третій елемент
arr = [1, 2, 3, 5, 7, 9, 56, 8, 68, 69]
for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % 3 === 0) {
        console.log(arr[i]);
    }
}

// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % 3 === 0 && arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх у новий масив
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % 3 === 0 && arr[i] % 2 === 0) {
        newArr.push(arr[i]);
    }
}
console.log(newArr, 'the even numbers have been added to the new array');

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
arr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] % 2 === 0) {
        console.log(arr[i]);
    }
}

// 6. Є масив із числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let prices = [100, 250, 50, 168, 120, 345, 188];
let totalPrice = 0;
for (let i = 0; i < prices.length; i++) {
    totalPrice = totalPrice + prices[i];
}
console.log((totalPrice / prices.length).toFixed(), 'the average price');

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let randomArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let newRandomArr = [];
for (let i = 0; i < randomArr.length; i++) {
    newRandomArr.push(randomArr[i] * 5);
    console.log(newRandomArr);
}

// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтися по ньому, і, якщо елемент є числом, додати його в інший масив.
newRandomArr = [];
for (let i = 0; i < mixedArr.length; i++) {
    if (typeof mixedArr[i] === 'number') {
        newRandomArr.push(mixedArr[i]);
    }
}
console.log(newRandomArr, 'the numbers');

// – Дано 2 масиви з рівною кількістю об’єктів.
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];

for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id) {
            usersWithCities.push({
                ...user, address: {...city}
            })
        }
    }
}
console.log(usersWithCities, 'the users with cities');

// – Узяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
randomArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (const item of randomArr) {
    if (item % 2 === 0) {
        console.log(item);
    }
}

// – Узяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
newArr = [];
for (const item of randomArr) {
    newArr.push(item);
}
console.log(newArr, 'the copied numbers');

// – Дано масив: [‘a’, ‘b’, ‘c’]. За допомогою циклу for зібрати всі букви в слово.
arr = ['a', 'b', 'c'];
let word = '';
for (i = 0; i < arr.length; i++) {
    word += arr[i];
}
console.log(word, 'concatenated letters');
// – Дано масив: [‘a’, ‘b’, ‘c’]. За допомогою циклу while зібрати всі букви в слово.
i = 0;
word = '';
while (i < arr.length) {
    word += arr[i];
    i++;
}
console.log(word, 'concatenated letters');

// – Дано масив: [‘a’, ‘b’, ‘c’]. За допомогою циклу for of зібрати всі букви в слово.
word = '';
for (const letter of arr) {
    word += letter;
}
console.log(word, 'concatenated letters');
