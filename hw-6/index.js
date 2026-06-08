// #dFeorS3m7u
// Знайти та вивести довжину наступних string значень
let strArr = ['hello world', 'lorem ipsum', 'javascript is cool'];
strArr.forEach((value, index) => console.log(`the length of ${value} value on ${index} index is ${value.length} characters long`));

// #8lld9HMxXWB
// Перевести до великого регістру наступні string значення
let newArr = [];
strArr.forEach(value => newArr.push(value.toUpperCase()));
console.log(newArr);

// #ClDsAm7xba7
strArr = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
// Перевести до нижнього регістру наступні string значення
strArr.forEach(value => console.log(value.toLowerCase()));

// #0b89BkYZwu
// – Є “брудна” string. Почистити її від зайвих пробілів.
let str = '  dirty string   '
str = str.trim();
console.log(str);

// #bfoJuse4ZzP
// Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
str = 'Ревуть воли як ясла повні';

// function stringToArray(str) {
//     return str.split(' ');
// }
//
// let arr = stringToArray(str);
// console.log(arr);

let arr = str => str.split(' ');
console.log(arr(str));

// #Rbr5kEQ
// – є масив чисел, за допомоги map() перетворити всі об’єкти в масиві на string.
let numArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let mappedArr = numArr.map(value => value.toString());
console.log(mappedArr);

// #5hqyKTfmc
// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки – залежно від значення аргументу direction.
let nums = [11, 21, 3];

function sortNums(array, direction) {
    if (direction === 'asc') {
        return array.sort((a, b) => a - b)
    }
    if (direction === 'desc') {
        return array.sort((a, b) => b - a)
    }
    console.log('Invalid direction');
    return null
}

console.log(sortNums(nums, 'asc'));
console.log(sortNums(nums, 'desc'));
console.log(sortNums(nums, 'wrong'));


// #yo06d74c1C
// – є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// — відсортувати його за спаданням за monthDuration
// — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
// — за допомоги map перетворити кожен елемент на наступний тип {id, title, monthDuration}

let newCoursesArr = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration).filter(item => item.monthDuration > 5).map((item, index) => {
    return {id: index + 1, ...item}
});
console.log(newCoursesArr);


// #4LJn7zBx
// взяти з arrays.js масив coursesArray

// –написати пошук всіх об’єктів, в яких в modules є sass

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

//used with filter()

let filteredArrWithSass = [];
let filteredArrDocker = [];

coursesArray.filter(item => {
    if (item.modules.includes('sass')) {
        filteredArrWithSass.push(item);
    }
    if (item.modules.includes('docker')) {
        filteredArrDocker.push(item);
    }
    return item;
});
console.log(filteredArrWithSass);
console.log(filteredArrDocker);

//used with reduce()

console.log(coursesArray.reduce((accumulator, currentValue) => {
    if (currentValue.modules.includes('sass')) {
        accumulator.coursesWithSass.push(currentValue);
    }
    if (currentValue.modules.includes('docker')) {
        accumulator.coursesWithDocker.push(currentValue);
    }
    return accumulator;
}, {coursesWithSass: [], coursesWithDocker: []}));


// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу

const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
const deck = [];

for (const suit of suits) {
    for (const value of values) {
        deck.push({
            cardSuite: suit,
            value: value,
            color: (suit === 'diamond' || suit === 'heart') ? 'red' : 'black'
        });
    }
}
console.log(deck);

// Після опису, використовуючи функції масивів:

// знайти піковий туз
// let aceOfSpades= deck.filter(item => item.cardSuite ==='spade' && item.value === 'ace');
console.log('ace of spades', deck.find(item => item.cardSuite === 'spade' && item.value === 'ace'));

// всі шістки
console.log('sixes', deck.filter(item => item.value === '6'));

// всі червоні карти
console.log('red cards', deck.filter(item => item.color === 'red'));

// всі буби
console.log('all diamonds', deck.filter(item => item.cardSuite === 'diamond'));

// всі трефи від 9 та більше
console.log('all clubs from 9 and more', deck.filter(item => item.cardSuite === 'clubs' && item.value >= '9'));


// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
const grouped = deck.reduce((accumulator, card) => {
    // більш коротка версія
    // accumulator[card.cardSuite].push(card);

    ///--------------------------------/////
    const suitKey = card.cardSuite;
    const targetArr = accumulator[suitKey];
    targetArr.push(card);

    return accumulator;
}, {spade: [], diamond: [], heart: [], clubs: []});
console.log(grouped);


