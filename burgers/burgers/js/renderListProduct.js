import { API_URL, PREFIX_PRODUCT } from "./const.js";
import { getData } from "./getData.js";
import { createCardProduct } from './createCardProduct.js';
import { catalogList } from './elements.js';

export const renderListProduct = async (category = 'burger') => {
    const listElem = await getData(`${API_URL}${PREFIX_PRODUCT}?category=${category}`);
    catalogList.textContent = '';
    const cards = listElem.map(createCardProduct);
    catalogList.append(...cards);
};