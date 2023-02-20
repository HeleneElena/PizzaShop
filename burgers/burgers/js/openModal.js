import { modalProduct,
    modalProductImage,
    modalProductDescription,
    ingredientsList,
    ingredientsCalories,
    productPriceCount,
    modalProductTitle
} from './elements.js';

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
    productPriceCount.textContent = product.price;

    modalProduct.classList.add('modal_open');
};
