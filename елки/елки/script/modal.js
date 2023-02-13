const modalClose = document.querySelector('.modal__close'),
      overlayOrder = document.querySelector('.overlay_order'),
      buttonOrder = document.querySelectorAll('.button__order'),
      modal = document.querySelector('.modal');

buttonOrder.forEach(el => {
    el.addEventListener('click', () => {
        overlayOrder.classList.add('overlay_active');
        modal.style.display = 'block';
    });
});

modalClose.addEventListener('click', () => {
    overlayOrder.classList.remove('overlay_active');
    modal.style.display = 'none';
});
