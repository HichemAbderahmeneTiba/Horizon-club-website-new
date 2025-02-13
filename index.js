'use strict';

const body = document.body;
const close = document.querySelector('.close-btn');
const menu = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.small-nav');
const joinUs = document.querySelector('.joinUs');
const JoinUsForm = document.querySelector('.joinUsForm');
const closeJoin = document.querySelector('.close-join');

const inputs = document.querySelectorAll('.join');
const select = document.querySelector('.choice');

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

joinUs.addEventListener('click', function () {
  JoinUsForm.classList.add('showing');
  JoinUsForm.style.opacity = '1';
  JoinUsForm.style.display = 'block';
  removeOpacity('joinUsForm');
});

closeJoin.addEventListener('click', function () {
  JoinUsForm.classList.remove('showing');
  JoinUsForm.style.opacity = '0';
  JoinUsForm.style.display = 'none';
  addOpacity('joinUsForm');
  inputs.forEach(input => (input.value = ''));
  select.value = 'no';
});
