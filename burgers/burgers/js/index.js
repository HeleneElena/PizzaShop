import { openModal } from './openModal.js';

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
};





catalogList.forEach(el => {
    el.addEventListener('click', (e) => {
        if (e.target.closest('.product__image') || e.target.closest('.product__detail')) {
           openModal(product);
        }
    });
});

modalProduct.addEventListener('click', (e) => {
    if (e.target.closest('.modal__close') || e.target == modalProduct) {
        modalProduct.classList.remove('modal_open');
    }
});