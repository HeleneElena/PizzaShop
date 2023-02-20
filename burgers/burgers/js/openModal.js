const modalProduct = document.querySelector('.modal_product');
const modalProductImage = document.querySelector('.modal-product__image'),
    modalProductDescription = document.querySelector('.modal-product__description'),
    ingredientsList = document.querySelector('.ingredients__list'),
    ingredientsCalories = document.querySelector('.ingredients__calories'),
    modalProductPrice = document.querySelector('.modal-product__price'),
    modalProductTitle = document.querySelector('.modal-product__title');


export const openModal = (product) => {
    modalProductTitle.textContent = product.title;
    modalProductImage.src = product.image;
    modalProductDescription.textContent = product.description;
    ingredientsList.textContent = '';

    const ingredientsItems = product.ingredients.map(el => {
        const li = document.createElement('li');
        li.classList.add('ingredients__item');
        li.textContent = el;
        return li;
    });
    ingredientsList.append(...ingredientsItems);

    ingredientsCalories.textContent = `${product.weight} г, ккал ${product.calories}`;
    modalProductPrice.textContent = product.price;

    modalProduct.classList.add('modal_open');
};
