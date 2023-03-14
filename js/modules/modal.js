function modal(){
      //Modal

      const modal = document.querySelector('.modal'),
      modalTrigger = document.querySelectorAll('[data-modal]');


  function openModal() {
      modal.classList.add('show'); //или modal.classList.toggle('show);
      modal.classList.remove('hide');
      document.body.style.overflow = 'hidden';
      clearInterval(modalTimerId);
  }

  modalTrigger.forEach(btn => {
      btn.addEventListener('click', openModal);
  });

  function closeModal() {
      modal.classList.remove('show'); //или modal.classList.toggle('show);
      modal.classList.add('hide');
      document.body.style.overflow = '';
  }

  /*  modalClosebtn.addEventListener('click', closeModal); */

  modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.getAttribute('data-close') == '') {
          closeModal();
      }
  });

  document.addEventListener('keydown', (e) => {
      if (e.code === "Escape" && modal.classList.contains('show')) {
          closeModal();
      }
  });

  const modalTimerId = setTimeout(openModal, 5000);


  function showModalByScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
          openModal();
          window.removeEventListener('scroll', showModalByScroll);
      }
  }

  window.addEventListener('scroll', showModalByScroll);

}

module.exports = modal;