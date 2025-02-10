'use strict';
const close = document.querySelector('.close-btn');
const menu = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.small-nav');
const bodyChildren = document.querySelectorAll('body > *:not(.small-nav)');

menu.addEventListener('click', function (e) {
  e.preventDefault();
  sideMenu.style.left = '0';
  bodyChildren.forEach(el => {
    el.style.opacity = '0.5';
  });
  sideMenu.style.opacity = '1';
});

close.addEventListener('click', function (e) {
  e.preventDefault();
  sideMenu.style.left = '-50vw';
  bodyChildren.forEach(el => {
    el.style.opacity = '1';
  });
});
