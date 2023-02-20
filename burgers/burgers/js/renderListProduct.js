import { API_URL, PREFIX_PRODUCT } from './const.js';
import { catalogList } from './elements.js';
import { getData } from './getData.js';
import { createProductCard } from './createCardProduct.js';


export const renderListProduct = async () => {
    const listProduct = await getData(`${API_URL}${PREFIX_PRODUCT}`);
    catalogList.textContent = '';
    const cards = listProduct.map(createProductCard);
    catalogList.append(...cards);
};

