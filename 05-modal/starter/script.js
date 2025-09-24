'use strict';

// modal element

const modalEl = document.querySelector('.modal');

//Overlay Modal
const overlayEl = document.querySelector('.overlay');

//ClosedModal
const btnClosedModalEl = document.querySelector('.close-modal');

//openModal
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

btnClosedModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);
