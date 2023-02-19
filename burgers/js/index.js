const modalProduct = document.querySelector('.modal_product'),
      catalogList = document.querySelectorAll('.catalog__list');

const product = {
    title: 'бургер Oppa-pa',
    price: 222,
    weight: 200,
    calories: 1500,
    description: 'большой классный бургер, самый популярный в нашем магазине',
    image: 'img/burger4.jpg',
    ingredients: ['brot', 'butter', 'chicken'],
    count: 1,
};

   const modalProductImage = document.querySelector('.modal-product__image'),
      modalProductDescription = document.querySelector('.modal-product__description'),
      ingredientsList = document.querySelector('.ingredients__list'),
      ingredientsCalories = document.querySelector('.ingredients__calories'),
      modalProductPrice = document.querySelector('.modal-product__price'),
      modalProductTitle = document.querySelector('.modal-product__title');

const openModal = (product) => {
    modalProductTitle.textContent = product.title;
    modalProductDescription.textContent = product.description;
    ingredientsCalories.textContent = `${product.weight} г, ккал ${product.calories}`;
    modalProductPrice.textContent = product.price;
    modalProductImage.src = product.image;
    ingredientsList.textContent = '';
   
    const listIngrediens = product.ingredients.map(el => {
         const li = document.createElement('li');
         li.classList.add('.ingredients__item');
         li.textContent = el;
        return li;
    });

    ingredientsCalories.append(...listIngrediens);

    modalProduct.classList.add('modal_open');
};

const createCardroduct = (product) => {
    let li = document.createElement('li');
    li.classList.add('catalog__item');
    li.innerHTML = `
        <article class="product">
            <img class="product__image" src="${product.image}" alt="${product.title}">

            <p class="product__price">${product.price}<span class="currency">₽</span></p>

            <h3 class="product__title">
                <button class="product__detail">${product.title}</button>
            </h3>

            <p class="product__weight">${product.weight} г</p>

            <button class="product__add">Добавить</button>
        </article>
    `;
    return li;
};

catalogList.textContent = '';

catalogList.forEach(el => {
    el.addEventListener('click', (e) => {
        if (e.target.closest('.product__image') || e.target.closest('.product__detail')) {
           openModal(product);
        }
    });
});

modalProduct.addEventListener('click', (e) => {
    if (e.target.closest('.modal__close') || e.target === modalProduct) {
        modalProduct.classList.remove('modal_open');
    }
});