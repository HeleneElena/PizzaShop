const overlayOrder = document.querySelector('.overlay_order'),
      buttonsOrder = document.querySelectorAll('.button__order'),
      modal = document.querySelector('.modal');

buttonsOrder.forEach(el => {
    el.addEventListener('click', () => {
        overlayOrder.classList.add('overlay_active');
        modal.style.display = 'block';
        const order = overlayOrder.querySelector('.modal__order');
        order.value = el.dataset.order;
    });
});

overlayOrder.addEventListener('click', (e) => {
    if (e.target === overlayOrder || e.target.closest('.modal__close')) {
        overlayOrder.classList.remove('overlay_active');
        modal.style.display = 'none';
    }
});

