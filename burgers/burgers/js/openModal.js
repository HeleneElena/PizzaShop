import { API_URL, PREFIX_PRODUCT } from './const.js';
import { modalProductTitle,
    modalProductImage,
    modalProductDescription,
    ingredientsCalories,
    ingredientsList,
    productPriceCount,
    modalProduct, 
    modalProductBtn} from './elements.js';
import { getData } from './getData.js';

export const openModal = async (id) => {
    const product = await getData(`${API_URL}${PREFIX_PRODUCT}/${id}`);
    modalProductTitle.textContent = product.title;
    modalProductImage.src = `${API_URL}/${product.image}`;
    modalProductDescription.textContent = product.description;
    ingredientsCalories.textContent = `${product.weight} г, ккал ${product.calories}`;
    ingredientsList.textContent = '';

    const ingredientsItems = product.ingredients.map(el => {
        const li = document.createElement('li');
        li.classList.add('ingredients__item');
        li.textContent = el;
        return li;
    });
    ingredientsList.append(...ingredientsItems);

    productPriceCount.textContent = product.price;

    modalProductBtn.dataset.id = product.id;

    modalProduct.classList.add('modal_open');
};