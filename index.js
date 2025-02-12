'use strict';

const body = document.body;
const close = document.querySelector('.close-btn');
const menu = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.small-nav');
const bodyChildren = document.querySelectorAll('body > *:not(.small-nav)');
const joinUs = document.querySelector('.joinUs');
const JoinUsForm = document.querySelector('.joinUsForm');
const closeJoin = document.querySelector('.close-join');

// inputs
const inputs = document.querySelectorAll('.join');
const select = document.querySelector('.choice');

// For navbar menu
menu.addEventListener('click', function (e) {
  e.preventDefault();
  removeOpacity('small-nav');
  sideMenu.style.left = '0';
  sideMenu.style.opacity = '1';
  JoinUsForm.opacity = '0';
});

close.addEventListener('click', function (e) {
  e.preventDefault();
  sideMenu.style.left = '-50vw';
  sideMenu.style.opacity = '0';
  addOpacity('small-nav');
});

function removeOpacity(excludedClass) {
  const bodyChildren = document.querySelectorAll(
    `body > *:not(.${excludedClass})`
  );
  bodyChildren.forEach(el => {
    el.style.opacity = '0.5';
    el.style.transition = 'opacity 0.3s ease';
  });
}

function addOpacity(includedClass) {
  const bodyChildren = document.querySelectorAll(
    `body > *:not(.${includedClass})`
  );
  bodyChildren.forEach(el => {
    el.style.opacity = '1';
    el.style.transition = 'opacity 0.3s ease';
  });
}

joinUs.addEventListener('click', function () {
  JoinUsForm.classList.add('showing');
  removeOpacity('joinUsForm');
});

closeJoin.addEventListener('click', function () {
  JoinUsForm.classList.remove('showing');
  addOpacity('joinUsForm');
  inputs.forEach(input => (input.value = ''));
  select.value = 'yes';
});
