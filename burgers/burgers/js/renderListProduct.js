import { getData } from './getData.js';
import { API_URL, PREFIX_PRODUCT } from './const.js';
import { catalogList } from './elements.js';
import { createCardProduct } from './createCardProduct.js';

export const renderListProduct = async () => {
    const listElements = await getData(`${API_URL}${PREFIX_PRODUCT}`);
    catalogList.textContent = '';
    const cards = listElements.map(createCardProduct);
    catalogList.append(...cards);

};
