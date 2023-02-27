import { cartInit } from './cart.js';
import { navigationListController } from './navigationListController.js';
import { openModal } from './openModal.js';
import { renderListProduct } from './renderListProduct.js';

const modalProduct = document.querySelector('.modal_product'),
    catalogList = document.querySelector('.catalog__list');

const product = {
    title: 'бургер Oppa-pa',
    price: 258,
    weight: 200,
    calories: 1500,
    description: 'большой классный бургер, самый популярный в нашем магазине',
    image: 'img/burger4.jpg',
    ingredients: ['brot', 'butter', 'chicken'],
};


catalogList.addEventListener('click', (e) => {
    if (e.target.closest('.product__image') || e.target.closest('.product__detail')) {
        const id = e.target.closest('.product').dataset.id;
        openModal(id);
    }
});

modalProduct.addEventListener('click', (e) => {
    if (e.target.closest('.modal__close') || e.target === modalProduct) {
        modalProduct.classList.remove('modal_open');
    }
});

const init = () => {
    renderListProduct();
    navigationListController(renderListProduct);
    cartInit();
};
init();
