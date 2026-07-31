// #whXxOBlYS0H
// - узяти https://dummyjson.com/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.
fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(recipesObj => {
        console.log(recipesObj)
        const {recipes} = recipesObj;
        const container = document.createElement('div');
        container.classList.add('container');
        document.body.appendChild(container);
        for (const recipe of recipes) {
            const article = document.createElement('article');
            container.appendChild(article);
            const id = document.createElement('h2');
            id.innerText = recipe.id;
            const name = document.createElement('p');
            name.innerText = recipe.name;
            const img = document.createElement('img');
            img.src = recipe.image;
            img.alt = recipe.name;
            const list = document.createElement('ul');
            article.append(id, name, img, list);
            for (const ingredient of recipe.ingredients) {
                const listItem = document.createElement('li');
                listItem.innerText = ingredient;
                list.append(listItem);
            }
        }
    })