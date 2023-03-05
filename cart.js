import { getData } from './getData.js';
import { catalogList, 
    modalProductBtn,
    orderList, 
    orderCount,
    countAmount, 
    orderWrapTitle,
    orderSubmit,
    modalDelivery,
    orderTotalAmount,
    order} from './elements.js';
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

    // если в корзине нет товаров, запрещено открывать модальное окно с заказом= с формой
    // кнопка будет заблокирована, если товара нет
   orderSubmit.disabled = !cartList.length;
   const allProductId = cartList.map(el => el.id);

   const data = cartList.length 
   ? await getData(`${API_URL}${PREFIX_PRODUCT}?list=${allProductId}`)
   : [];
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
                <button class="count__minus" data-id-product=${product.id}>-</button>

                <p class="count__amount">${product.count}</p>

                <button class="count__plus" data-id-product=${product.id}>+</button>
            </div>
        `;
        return li;
   });
   orderList.append(...cartItems);

   // стоимость общая товара в корзине
   orderTotalAmount.textContent = data.reduce((acc, el) => {
     const product = cartList.find(cartItem => cartItem.id === el.id);
     return acc + (el.price * product.count); 
   }, 0);

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
   const cartList = getCart();
   const productIndex = cartList.findIndex((el) => el.id === id);
   cartList[productIndex].count -= 1;
   
   if (cartList[productIndex].count === 0) {
     cartList.splice(productIndex, 1);
   } 
   updateCartList(cartList);
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

   orderList.addEventListener('click', (e) => {
        const targetPlus = e.target.closest('.count__plus');
        const targetMinus = e.target.closest('.count__minus');

        if (targetPlus) {
          addCart(targetPlus.dataset.idProduct);
        }

        if (targetMinus) {
          removeCart(targetMinus.dataset.idProduct);
        }
   });

   // открытие и закрытие корзины на версиях менее 1024px
   orderWrapTitle.addEventListener('click', () => {
     order.classList.toggle('order_open');
   });

   orderSubmit.addEventListener('click', () => {
     modalDelivery.classList.add('modal_open');
   });

   modalDelivery.addEventListener('click', (e) => {
      if (e.target.closest('.modal__close') || e.target === modalDelivery) {
          modalDelivery.classList.remove('modal_open');
       }
   });
};

export const cartInit = () => {
   cartController();
   renderCartList();
};

