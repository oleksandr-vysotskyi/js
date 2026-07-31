// #HmvAfRQM
// – узяти https://dummyjson.com/carts та вивести інформацію про всі кошики. Відобразити всі поля для кожного кошика.
fetch('https://dummyjson.com/carts').then(value => value.json()).then(cartsObj => {
    const {carts} = cartsObj;
    console.log(carts)
    const div = document.createElement('div');
    div.classList.add('cart-container');
    document.body.appendChild(div);

    for (const cart of carts) {
        const cartBlock = document.createElement('article');
        cartBlock.innerText =
            `"total": ${cart.total},
             "discountedTotal":  ${cart.discountedTotal},
             "userId":  ${cart.userId},
             "totalProducts": ${cart.totalProducts},
             "totalQuantity": ${cart.totalQuantity}`;
        const ol = document.createElement('ol');
        for (const product of cart.products) {
            const li = document.createElement('li');
            const p = document.createElement('p');
            p.innerText =
                `"id": ${product.id},
                "title":  ${product.title},
                "price":  ${product.price},
                "quantity": ${product.quantity},
                "total": ${product.total},
                "discountPercentage": ${product.discountPercentage},
                "discountedTotal": ${product.discountedTotal}`;
            const img = document.createElement('img');
            img.src = product.thumbnail;
            img.alt = product.title;
            li.append(p, img);
            ol.appendChild(li);
        }
        div.append(cartBlock);
        cartBlock.append(ol);
    }
});