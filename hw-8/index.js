// #iz6emEsP2BA
// – є масив за допомогою map перетворити кожен елемент на наступний тип { id, title, monthDuration }
// Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]

coursesAndDurationArray.map((course, index) => (
    {
        id: index + 1, ...course
    }));
console.log(coursesAndDurationArray);


// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об’єкта.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.
let user = {
    name: 'John', age: 25, hobbies: ['reading', 'swimming', 'coding'],
    hello() {
        console.log('hello')
    },
    greeting() {
        console.log('greeting')
    }
};

function deepCopier(obj) {
    if (obj) {
        let functions = []
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const funcClone = obj[key].bind({});
                functions.push({funcClone, key});
            }
        }
        const clonedObj = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            clonedObj[func.key] = func.funcClone;
        }
        return clonedObj
    }
    return 'Obj is NaN, undefined or null';
}

console.log(deepCopier(user));
deepCopier(user).greeting();