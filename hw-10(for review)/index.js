// #bq1zkx7WP
// *** (подібне вже було, але...будьте уважні в другій частині)
// створити сторінку з довільним блоком, у середині якого є значення "100 грн",
// при перезавантаженні сторінки до значення додається по 10 грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулися пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулося раніше ніж минуло 10 секунд, нічого не відбувається

let someBlock = document.createElement('div');
document.body.appendChild(someBlock);

let count = +(localStorage.getItem('count') ?? 100);
someBlock.innerText = `${count} грн`;
const lastUpdate = +(localStorage.getItem('lastUpdate') ?? 0);
const dateNow = Date.now();


if (lastUpdate && (dateNow - lastUpdate > 10000)) {
    count = count + 10;
    localStorage.setItem('lastUpdate', dateNow);
} else if (!lastUpdate) {
    localStorage.setItem('lastUpdate', dateNow);
}

someBlock.innerText = `${count} грн`;
localStorage.setItem('count', count);


// #NKB0tgWIK1
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантаженні сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
const block = document.createElement('div');
const prevButton = document.createElement('button');
const nextButton = document.createElement('button');
const list = document.createElement('ul');

prevButton.innerText = 'prev';
nextButton.innerText = 'next';

document.body.appendChild(block);
block.append(prevButton, nextButton, list);


let arr = [];
for (let i = 1; i <= 100; i++) {
    arr.push({id: i, name: `user ${i}`});
}

let page = 0;

function render() {
    list.innerText = '';
    arr.slice(page * 10, (page * 10 + 10)).forEach(el => {
        const li = document.createElement('li');
        li.innerText = el.name;
        list.append(li);
    });
}

render();

nextButton.onclick = function () {
    if (page < 9) page++;
    render();
}

prevButton.onclick = function () {
    if (page > 0) page--;
    render();
}





