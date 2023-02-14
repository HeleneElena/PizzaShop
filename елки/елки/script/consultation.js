const overlayConsultation = document.querySelector('.overlay_consultation'),
      headerConsultation = document.querySelector('.header__consultation'),
      modalCloses = document.querySelector('.modal__closes'),
      modalConsult = document.querySelector('.modal__consult');

      console.log(headerConsultation);
      console.log(modalCloses);

headerConsultation.addEventListener('click', () => {
    modal.style.display = 'block';
    overlayConsultation.classList.add('.overlay_active');
});

modalCloses.addEventListener('click', () => {
    modal.style.display = 'none';
    overlayConsultation.classList.remove('.overlay_active');
});