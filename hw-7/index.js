// #XjJuucOMR0
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [
    new User(1, 'john', 'doe', 'john@mail.com', '0987654321'),
    new User(2, 'jane', 'doe', 'jane@mail.com', '0987654322'),
    new User(3, 'peter', 'newman', 'peter@mail.com', '0987654323'),
    new User(4, 'david', 'caruso', 'david@mail.com', '0987654324'),
    new User(5, 'misha', 'collins', 'misha@mail.com', '0987654325'),
    new User(6, 'mark', 'sheppard', 'mark@mail.com', '0987654326'),
    new User(7, 'mark', 'pellegrino', 'mark@mail.com', '0987654327'),
    new User(8, 'jon', 'bernthal', 'jon@mail.com', '0987654328'),
    new User(9, 'john', 'noble', 'john@mail.com', '0987654328'),
    new User(10, 'josh', 'hartnett', 'josh@mail.com', '0987654328')
]
console.log(users);

// #2ikXsE2WiKZ
// – Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
let filteredUsers = users.filter((user) => user.id % 2 === 0);
console.log(filteredUsers);

// #pOeHKct
// – Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let ascUserIds = users.sort((a, b) => a.id - b.id);
console.log(ascUserIds);

// #nkMXISv
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об’єктами Client
function Client(id, name, surname, email, phone, order = []) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

const clients = [
    new Client(1, 'jon', 'bernthal', 'jon@mail.com', '0987654328', ['coffee', 'croissant', 'juice', 'water', 'eggs']),
    new Client(2, 'john', 'doe', 'john@mail.com', '0987654321', ['latte', 'muffin']),
    new Client(3, 'jane', 'doe', 'jane@mail.com', '0987654322', ['tea', 'bagel', 'cookie']),
    new Client(4, 'peter', 'newman', 'peter@mail.com', '0987654323', ['espresso', 'sandwich', 'champagne']),
    new Client(5, 'david', 'caruso', 'david@mail.com', '0987654324', ['cappuccino', 'donut', 'water', 'americano']),
    new Client(6, 'misha', 'collins', 'misha@mail.com', '0987654325', ['americano', 'croissant', 'latte', 'tea']),
    new Client(7, 'mark', 'sheppard', 'mark@mail.com', '0987654326', ['juice', 'toast', 'yogurt', 'water']),
    new Client(8, 'josh', 'hartnett', 'josh@mail.com', '0987654329', ['mocha', 'brownie']),
    new Client(9, 'john', 'noble', 'john@mail.com', '0987654330', ['flat white', 'muffin', 'juice']),
    new Client(10, 'mark', 'pellegrino', 'mark@mail.com', '0987654331', ['tea', 'cookie'])
]
console.log(clients);

// #8abtVjRv
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів у полі order по зростанню. (sort)
let sortedClientsByOrder = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClientsByOrder);

// #vV9a6584I5
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
// — drive () – яка виводить у консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// — info () – яка виводить усю інформацію про автомобіль у форматі `назва поля – значення поля`
// — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
// — changeYear (newValue) – змінює рік випуску на значення newValue
// — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car
function CarConstructorFunction(make, model, year, price, maxSpeed, engineCapacity) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }
    this.increaseSpeed = function (speedToAdd) {
        if (speedToAdd > 0)
            this.maxSpeed += speedToAdd
        // this.maxSpeed = this.maxSpeed + speedToAdd;
    }
    this.changeYear = function (year) {
        year > 1815 ? this.year = year : 'not valid year'
    }
    this.addDriver = function (driver) {
        if (driver) this.driver = driver
    }
}

const car = new CarConstructorFunction('bmw', 'x6', 2015, 10000, 200, 1000);
console.log(car);
car.drive();
car.info();
car.increaseSpeed(100);
car.changeYear(2020);
car.addDriver({name: 'vasyl', age: 31});
console.log(car);


// #5kla3yMpgp
//  (Те саме, тільки через клас)
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
// — drive () – яка виводить у консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// — info () – яка виводить усю інформацію про автомобіль у форматі `назва поля – значення поля`
// — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
// — changeYear (newValue) – змінює рік випуску на значення newValue
// — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car

class CarConstructorClass {
    constructor(make, model, year, price, maxSpeed, engineCapacity) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }

    increaseSpeed(speedToAdd) {
        if (speedToAdd > 0)
            this.maxSpeed += speedToAdd
        // this.maxSpeed = this.maxSpeed + speedToAdd;
    }

    changeYear(year) {
        year > 1815 ? this.year = year : 'not valid year'
    }

    addDriver(driver) {
        if (driver) this.driver = driver
    }
}

const newCar = new CarConstructorClass('bmw', 'x5', 2020, 30000, 250, 2000);
console.log(newCar);
newCar.drive();
newCar.info();
newCar.increaseSpeed(300);
newCar.changeYear(2024);
newCar.addDriver({name: 'sasha', age: 33});
console.log(newCar);

// #zg6Fifnqig
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Створити об’єкт класу “принц” за допомоги класу, який має поля ім’я, вік, туфелька, яку він знайшов.
// За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderellasArr = [
    new Cinderella('Rita', 20, 36),
    new Cinderella('Luna', 23, 37),
    new Cinderella('Lana', 22, 39),
    new Cinderella('Sofia', 19, 40),
    new Cinderella('Mia', 24, 35),
    new Cinderella('Anna', 21, 34),
    new Cinderella('Kate', 23, 41),
    new Cinderella('Vira', 25, 38),
    new Cinderella('Daria', 18, 33),
    new Cinderella('Olia', 26, 32)
]

class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }
}

const prince = new Prince('John', 24, 35);

function findPrinceCinderella(cinderellasArr, prince) {
    //via for
    // for (const cinderella of cinderellasArr) {
    //     if (cinderella.footSize === prince.foundShoeSize) {
    //         prince.wife = cinderella;
    //         return `${cinderella.name} matches with prince ${prince.name} and she wears ${prince.foundShoeSize} shoes`;
    //     }
    // }
    //via forEach
    cinderellasArr.forEach(cinderella => {
        if (cinderella.footSize === prince.foundShoeSize) {
            prince.wife = cinderella;
            return `${cinderella.name} matches with prince ${prince.name} and she wears ${prince.foundShoeSize} shoes`;
        }
    })
    return 'Cinderella not found';
}

console.log(findPrinceCinderella(cinderellasArr, prince));

const findTheCinderella = cinderellasArr.find(cinderella => cinderella.footSize === prince.foundShoeSize);
prince.wife = findTheCinderella;
console.log(findTheCinderella);
console.log(prince);

// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
Array.prototype.myForEach = function (callback) {
    for(const item of this) {
        callback(item);
    }
}
const arr = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10];
arr.myForEach(item => console.log(item));

Array.prototype.myFilter = function (callback) {
    const newArr = [];
    for(const item of this) {
        if (callback(item)) newArr.push(item);
    }
    return newArr;
}
const filteredArr = arr.myFilter(item => item % 2 === 0);
console.log(filteredArr);