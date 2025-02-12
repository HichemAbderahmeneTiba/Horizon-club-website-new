'use strict';

const body = document.body;
const close = document.querySelector('.close-btn');
const menu = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.small-nav');
const joinUs = document.querySelector('.joinUs');
const JoinUsForm = document.querySelector('.joinUsForm');
const closeJoin = document.querySelector('.close-join');

// Inputs
const inputs = document.querySelectorAll('.join');
const select = document.querySelector('.choice');

// For navbar menu
menu.addEventListener('click', function (e) {
  e.preventDefault();
  removeOpacity('small-nav');
  sideMenu.style.left = '0';
  sideMenu.style.opacity = '1';

  // Hide JoinUsForm if menu opens
  JoinUsForm.style.opacity = '0';
  JoinUsForm.style.display = 'none';
});

close.addEventListener('click', function (e) {
  e.preventDefault();
  sideMenu.style.left = '-50vw';
  sideMenu.style.opacity = '0';
  addOpacity('small-nav');

  // Hide JoinUsForm completely when closing the side menu
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

// Show "Join Us" form
joinUs.addEventListener('click', function () {
  JoinUsForm.classList.add('showing');
  JoinUsForm.style.opacity = '1';
  JoinUsForm.style.display = 'block'; // Ensure it appears
  removeOpacity('joinUsForm');
});

// Close "Join Us" form
closeJoin.addEventListener('click', function () {
  JoinUsForm.classList.remove('showing');
  JoinUsForm.style.opacity = '0';
  JoinUsForm.style.display = 'none'; // Hide it completely
  addOpacity('joinUsForm');

  // Clear inputs
  inputs.forEach(input => (input.value = ''));

  // Ensure the default select value is "No"
  select.value = 'no';
});
