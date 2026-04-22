// #67kfznmiMl
// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент у консоль
let arr = ['1', '2', true, {id: 1, name: 'john'}, ['1', 2], null, NaN, undefined, '9', 10];
arr.forEach(item => console.log(item));

// #LARqoUj5I
// Створити 3 об’єкти які описують книги. Поля об’єкту : title, pageCount, genre.


let lotrBook = {title: 'The Fellowship of the Ring', pageCount: 590, genre: 'fantasy'};
let hobbitBook = {title: 'The Hobbit', pageCount: 354, genre: 'fantasy'};
const ringsBook = {title: 'The Lord of the Rings', pageCount: 754, genre: 'fantasy'}

// #jCHFnEbdmFd
//Створити масив з 10 об’єктами, які описують сутність “користувач”. Поля: name, username, password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Robert', username: 'Plant', password: '123'},
    {name: 'John', username: 'Doe', password: '12321'},
    {name: 'Jane', username: 'Smith', password: '12345'},
    {name: 'Mike', username: 'Johnson', password: '123456'},
    {name: 'Jessica', username: 'Williams', password: '1234567'},
    {name: 'David', username: 'Brown', password: '12345678'},
    {name: 'Sarah', username: 'Taylor', password: '123456789'},
    {name: 'Jared', username: 'Wilson', password: '1234567890'},
    {name: 'Jansen', username: 'Anderson', password: '1234567890'},
    {name: 'Eric', username: 'Dier', password: '1234567890'}
];

// console.log(users[0]);

// for(const user of users) {
//     console.log(user)
// }

users.forEach((user) => console.log(user));

// #sA3Gg1sCp
// Створити 3 об’єкти, які описують книги. Поля об’єкту : title, pageCount, genre, authors. Поле “автори” – являється масивом. Кожен автор має поля name та age.

let lotrBook1 = {title: 'The Fellowship of the Ring', pageCount: 590, genre: 'fantasy', authors: [{name: 'J.R.R.', age: 43}]};
let hobbitBook1 = {title: 'The Hobbit', pageCount: 354, genre: 'fantasy', authors: [{name: 'J.R.R.', age: 33}]};
let ringsBook1 = {
    title: 'The Lord of the Rings',
    pageCount: 754,
    genre: 'fantasy',
    authors: [{name: 'J.R.R.', age: 53}, {name: 'J.K.Rowling', age: 33}]
};
// #coYydZuaeEB
// Описати масив, в якому буде зберігатись інформація про температуру вранці, удень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати.
// Нормальних варіантів опису – 2. Варіант, коли у вас буде одновимірний масив з 21 значенням виключаємо одразу

const dailyTemperatures = [
    {
        day: 'monday',
        temperature:
            {
                morning: 15,
                afternoon: 25,
                evening: 20
            }
    },
    {
        day: 'tuesday',
        temperature:
            {
                morning: 16,
                afternoon: 26,
                evening: 21
            }
    },
    {
        day: 'wednesday',
        temperature:
            {
                morning: 14,
                afternoon: 24,
                evening: 19
            }
    },
    {
        day: 'thursday',
        temperature:
            {
                morning: 17,
                afternoon: 27,
                evening: 22
            }
    },
    {
        day: 'friday',
        temperature:
            {
                morning: 13,
                afternoon: 23,
                evening: 18
            }
    },
    {
        day: 'saturday',
        temperature:
            {
                morning: 18,
                afternoon: 28,
                evening: 23
            }
    },
    {
        day: 'sunday',
        temperature:
            {
                morning: 19,
                afternoon: 29,
                evening: 24
            }
    }
]

// #bAUsaq6LI
// Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте скрипт при а, що дорівнює 1, 0, -3

let x = [1, 0, -3]
x.forEach(item => {
    if (item !== 0) {
        console.log('Вірно');
    } else {
        console.log('Не вірно');
    }
});

// #3ckURevs
// Дано змінну time, яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (у першу, другу, третю або четверту частину години).


let time = [-1, 0, 1, 3, 5, 10, 14, 15, 20, 22, 25, 30, 38, 35, 40, 44, 45, 48, 50, 55, 59, 60, 'time'];

time.forEach((item) => {
    if (item >= 0 && item < 15) {
        console.log(`first quarter ${item}`)
    } else if (item >= 15 && item < 30) {
        console.log(`second quarter ${item}`)
    } else if (item >= 30 && item < 45) {
        console.log(`third quarter ${item}`)
    } else if (item >= 45 && item <= 60) {
        console.log(`fourth quarter ${item}`)
    } else {
        console.log(`invalid time ${item}`)
    }
})


// #UMoNq4biWGe
// У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).


let days = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, '32', 'time'];

days.forEach((item) => {
    if (item >= 1 && item <= 10) {
        console.log(`first decade ${item}`)
    } else if (item > 10 && item <= 20) {
        console.log(`second decade ${item}`)
    } else if (item > 20 && item <= 31) {
        console.log(`third decade ${item}`)
    } else {
        console.log(`invalid day ${item}`)
    }
})

// #KzrtqyQ
// Скласти розклад на тиждень за допомогою switch. Користувач уводить порядковий номер дня тижня і на екрані
// відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayOfWeek = [1, 2, 3, 4, 5, 6, 7, '7', 'day'];
dayOfWeek.forEach((item) => {
    switch (item) {
        case 1:
            console.log(`Monday "${item}"`);
            break;
        case 2:
            console.log(`Tuesday "${item}"`);
            break;
        case 3:
            console.log(`Wednesday "${item}"`);
            break;
        case 4:
            console.log(`Thursday "${item}"`);
            break;
        case 5:
            console.log(`Friday "${item}"`);
            break;
        case 6:
            console.log(`Saturday "${item}"`);
            break;
        case 7:
            console.log(`Sunday "${item}"`);
            break;
        default:
            console.log(`Invalid day "${item}"`);
    }
})


// #uwsz1RnTQJ1
// Користувач уводить або має два числа.Потрібно знайти та вивести максимальне число з тих двох.
// Також потрібно врахувати, коли введені рівні числа.

let a = 10;
let b = 20;

if (a > b) {
    console.log(a);
} else if (b > a) {
    console.log(b);
} else if (a === b) {
    console.log('equal');
}

let numbers = [100, 400]
let [c, d] = numbers
if (c === d) {
    console.log('equal');
} else {
    console.log(Math.max(c, d));
}


// #iBvqtjEm
// – є змінна х, яка може прийняти будь-яке значення (string, number, undefined, null і тд включно).
// Напишіть код, який буде присвоювати змінній х значення “default”, якщо ви намагаєтеся присвоїти в неї falsy-значення (хибно подібні,
// тобто ті, які приводиться до false, а це 0 null undefined і тд).

let y = ''
if (!y) {
    console.log(y = 'default');
}

// if (y === '', y === 0, y === null, y === undefined, y === NaN) {
//     console.log(y = 'default');
// }


// #awLXL6TBzg
// з файлу arrays.js (лежить у вкладеннях) узяти масив coursesAndDurationArray. За допомогою іф перевірити кожен його елемент на тривалість навчання.
// У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    if (course.monthDuration > 5) {
        console.log(course.monthDuration, course.title);
    } else {
        console.log(course.monthDuration, 'duration is less than or equal to 5 months');
    }
}

let courseArr1 = coursesAndDurationArray[0].monthDuration
let courseArr2 = coursesAndDurationArray[1].monthDuration
let courseArr3 = coursesAndDurationArray[2].monthDuration
let courseArr4 = coursesAndDurationArray[3].monthDuration
let courseArr5 = coursesAndDurationArray[4].monthDuration
let courseArr6 = coursesAndDurationArray[5].monthDuration


if (courseArr1 > 5 ) {
    console.log('Супер')
}
if (courseArr2 > 5) {
    console.log('Супер')
}
if (courseArr3 > 5) {
    console.log('Супер')
}
if (courseArr4 > 5) {
    console.log('Супер')
}
if (courseArr5 > 5) {
    console.log('Супер')
}
if (courseArr6 > 5) {
    console.log('Супер')
}