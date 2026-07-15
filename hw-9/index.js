// #8Nmt60ZT
// – створити блок
// – додати йому класи wrap, collapse, alpha, beta
// – додати стилі (довільні значення): колір фону, колір тексту, розмір тексту
// – додати цей блок в body.
// – клонувати його повністю та додати клон в body
let block = document.createElement('div');
block.innerText = 'Hello world';
block.classList.add('wrap', 'collapse', 'alpha', 'beta');

function addStyles(styleTypes, styleValues) {
    for (let i = 0; i < styleValues.length; i++) {
        block.style[styleTypes[i]] = styleValues[i];
    }
}

addStyles(['backgroundColor', 'color', 'fontSize'], ['grey', 'white', '20px']);

document.body.appendChild(block);

let clonedBlock = block.cloneNode(true);
document.body.appendChild(clonedBlock);

// #OPLI89c9G
// – Дано масив:
// Зробити ul, у середині якої будуть лежати елементи масиву (кожен у своєму li)
let arr = ['Main', 'Products', 'About us', 'Contacts'];
let ul = document.createElement('ul');
document.body.appendChild(ul);

for (const item of arr) {
    let li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}
// #jeBqHV525U5
// – Дано масив:
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const item of coursesAndDurationArray) {
    let p = document.createElement('p');
    p.innerText = `${item.title} ${item.monthDuration}`;
    document.body.appendChild(p);
}

// #Kx1xgoKy8
// За допомоги скрипту для кожного елементу масиву зробити <div class=’item’> ,  в якому буде <h1 class=’heading’>  з title  елементу,
// та <p class=’description’> з monthDuration елементу.
for (const item of coursesAndDurationArray) {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    div.classList.add('item');
    h1.classList.add('heading');
    p.classList.add('description');
    h1.innerText = item.title;
    p.innerText = item.monthDuration;
    document.body.appendChild(div);
    div.append(h1, p);
}

// =========

// – Дано масив:

coursesArray = [
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

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами

for (const item of coursesArray) {
    let div = document.createElement('div');
    let article = document.createElement('article');
    let wrapper = document.createElement('div');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let ul = document.createElement('ul');
    div.classList.add('course');
    wrapper.classList.add('wrapper');
    h2.innerText = item.title;
    h3.innerText = item.monthDuration;
    p.innerText = item.hourDuration;
    document.body.appendChild(div);
    div.appendChild(article)
    wrapper.appendChild(h3);
    wrapper.appendChild(p);
    article.appendChild(h2);
    article.appendChild(wrapper);
    article.appendChild(ul);

    for (const module of item.modules) {
        let li = document.createElement('li');
        li.innerText = module;
        ul.appendChild(li);
    }
}