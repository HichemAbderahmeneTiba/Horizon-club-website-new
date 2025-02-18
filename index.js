'use strict';

const body = document.body;
const close = document.querySelector('.close-btn');
const menu = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.small-nav');
const joinUs = document.querySelector('.joinUs');
// const JoinUsForm = document.querySelector('.joinUsForm');
// const closeJoin = document.querySelector('.close-join');

const inputs = document.querySelectorAll('.join');
const select = document.querySelector('.choice');
const whyElements = document.querySelectorAll('.why');

menu.addEventListener('click', function (e) {
  e.preventDefault();
  removeOpacity('small-nav');
  sideMenu.style.left = '0';
  sideMenu.style.opacity = '1';

  JoinUsForm.style.opacity = '0';
  JoinUsForm.style.display = 'none';
});

close.addEventListener('click', function (e) {
  e.preventDefault();
  sideMenu.style.left = '-50vw';
  sideMenu.style.opacity = '0';
  addOpacity('small-nav');

  JoinUsForm.style.opacity = '0';
  JoinUsForm.style.display = 'none';
});

function removeOpacity(excludedClass) {
  document.querySelectorAll(`body > *:not(.${excludedClass})`).forEach(el => {
    el.style.opacity = '0.5';
    el.style.transition = 'opacity 0.3s ease';
  });
}

function addOpacity(includedClass) {
  document.querySelectorAll(`body > *:not(.${includedClass})`).forEach(el => {
    el.style.opacity = '1';
    el.style.transition = 'opacity 0.3s ease';
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal', // Ensure it's set to horizontal scrolling
    loop: true, // Enables infinite looping
    slidesPerView: 1, // Shows one slide at a time
    spaceBetween: 25, // Adds spacing between slides

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});

console.log(typeof Swiper);

// joinUs.addEventListener('click', function () {
//   JoinUsForm.classList.add('showing');
//   JoinUsForm.style.opacity = '1';
//   JoinUsForm.style.display = 'block';
//   removeOpacity('joinUsForm');
// });

// closeJoin.addEventListener('click', function () {
//   JoinUsForm.classList.remove('showing');
//   JoinUsForm.style.opacity = '0';
//   JoinUsForm.style.display = 'none';
//   addOpacity('joinUsForm');
//   inputs.forEach(input => (input.value = ''));
//   select.value = 'no';
// });
