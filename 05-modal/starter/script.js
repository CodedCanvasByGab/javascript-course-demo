'use strict';

// modal element

const modalEl = document.querySelector('.modal');

//Overlay Modal
const overlayEl = document.querySelector('.overlay');

//ClosedModal
const btnClosedModalEl = document.querySelector('.close-modal');

//openModal
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

let lastFocusedButton = null;

const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');

  modalEl.focus();
  lastFocusedButton = document.activeElement;
};

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');

  if (lastFocusedButton) {
    lastFocusedButton.focus();
  }
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnClosedModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');

btnClosedModalEl.setAttribute('aria-label', 'Close-modal');
