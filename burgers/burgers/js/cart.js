import { getData } from './getData.js';
import { catalogList, 
    modalProductBtn,
    orderList, 
    orderCount,
    countAmount } from './elements.js';
import { API_URL, PREFIX_PRODUCT } from './const.js';

const getCart = () => {
   const cartList = localStorage.getItem('cart');

   if (cartList) {
        return JSON.parse(cartList);
   } else {
        return [];
   }
};

const renderCartList = async () => {
   const cartList = getCart();
   const allProductId = cartList.map(el => el.id);

   const data = await getData(`${API_URL}${PREFIX_PRODUCT}?list=${allProductId}`);
   const countProduct = cartList.reduce((acc, el) => acc + el.count, 0);
   orderCount.textContent = countProduct;

   orderList.textContent = '';
   const cartItems = data.map(el => {
        const li = document.createElement('li');
        li.classList.add('order__item');
        li.dataset.id = el.id;
        const product = cartList.find(cartItem => cartItem.id === el.id);
        li.innerHTML = `
             <img src="${API_URL}/${el.image}" alt=${el.title} class="order__image">

                <div class="order__product">
                <h3 class="order__product-title">${el.title}</h3>

                <p class="order__product-weight">${el.weight} г</p>

                <p class="order__product-price">${el.price} ₽</p>
                </div>

                <div class="order__product-count count">
                <button class="count__minus">-</button>

                <p class="count__amount">${product.count}</p>

                <button class="count__plus">+</button>
            </div>
        `;
        return li;
   });
   orderList.append(...cartItems);
};

const updateCartList = (cartList) => {
   localStorage.setItem('cart', JSON.stringify(cartList));
   renderCartList();
};

const addCart = (id, count = 1) => {
   const cartList = getCart();
   const product = cartList.find(el => el.id === id);
   
   if (product) {
        product.count += count;
   } else {
        cartList.push({id, count});
   }

   updateCartList(cartList);
};

const removeCart = (id) => {
   
};

const cartController = () => {
   catalogList.addEventListener('click', ({ target }) => {
        if (target.closest('.product__add')) {
            addCart(target.closest('.product').dataset.id);
        }
   });

   modalProductBtn.addEventListener('click', ({ target }) => {
        addCart(target.dataset.id, parseFloat(countAmount.textContent));
   });
};

export const cartInit = () => {
   cartController();
   renderCartList();
};

