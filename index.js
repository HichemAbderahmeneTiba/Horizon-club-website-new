'use strict';
// Selectors
const body = document.body;
const close = document.querySelector('.close-btn');
const menu = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.small-nav');
const joinUs = document.querySelector('.joinUs');
const joinUsForm = document.querySelector('.joinUsForm');
const closeJoin = document.querySelector('.close-join');
const inputs = document.querySelectorAll('.join');
const select = document.querySelector('.choice');
const whyElements = document.querySelectorAll('.why');
const containers = document.querySelectorAll('.container');
const aTag = document.querySelectorAll('a');
const header = document.querySelector('.header');

// Functions
function removeOpacity(excludedClass) {
  document.querySelectorAll(`body > *:not(.${excludedClass})`).forEach(el => {
    el.style.opacity = '0.5';
    el.style.transition = 'all 0.3s ease';
    header.style.opacity = '1';
  });
}

function addOpacity(includedClass) {
  document.querySelectorAll(`body > *:not(.${includedClass})`).forEach(el => {
    el.style.opacity = '1';
    el.style.transition = 'all 0.3s ease';
  });
}

// Events
menu.addEventListener('click', function (e) {
  e.preventDefault();
  removeOpacity('small-nav');
  sideMenu.style.left = '0';
  sideMenu.style.opacity = '1';
  joinUs.classList.add('disable-clicks');
  joinUsForm.style.opacity = '0';
  joinUsForm.style.display = 'none';
});

close.addEventListener('click', function (e) {
  e.preventDefault();
  sideMenu.style.left = '-50vw';
  sideMenu.style.opacity = '0';
  addOpacity('small-nav');
  joinUs.classList.remove('disable-clicks');
  joinUsForm.style.opacity = '0';
  joinUsForm.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function () {
  if (typeof Swiper !== 'undefined') {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 25,
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
  }
});

if (joinUs) {
  joinUs.addEventListener('click', function () {
    joinUsForm.classList.add('showing');
    joinUsForm.style.opacity = '1';
    joinUsForm.style.display = 'block';
    removeOpacity('joinUsForm');
  });
}

if (closeJoin) {
  closeJoin.addEventListener('click', function () {
    joinUsForm.classList.remove('showing');
    joinUsForm.style.opacity = '0';
    joinUsForm.style.display = 'none';
    addOpacity('joinUsForm');
    inputs.forEach(input => (input.value = ''));
    select.value = 'no';
  });
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  {
    threshold: 0.2,
  }
);

containers.forEach(container => {
  observer.observe(container);
});

aTag.forEach(a =>
  a.addEventListener('click', function (e) {
    e.preventDefault();
    setTimeout(() => {
      window.location.href = this.getAttribute('href');
    }, 500);
  })
);

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const whys = entry.target.querySelectorAll('.why'); // Get all `.why` elements in the container
          whys.forEach((why, index) => {
            setTimeout(() => {
              why.classList.add('animating-why');
            }, index * 500);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  const containers = document.querySelectorAll('.left-why');
  containers.forEach(container => observer.observe(container));
});

// dark mode

document.addEventListener('DOMContentLoaded', () => {
  const darkLightToggle = document.querySelector('.dark-light');
  const sunIcon = document.querySelector('.light');
  const moonIcon = document.querySelector('.dark');
  const navLogo = document.querySelector('.nav-icon');
  const heroImg = document.querySelector('.hero-img');
  const logoIdeator = document.querySelector('.ideator-logo');

  // Function to change logo src based on mode
  const updateLogo = isDark => {
    if (isDark) {
      if (navLogo) navLogo.src = 'images/horizon-logo-white.png';
      if (heroImg) heroImg.src = 'images/Horizon_Logo_black.png';
      if (logoIdeator) logoIdeator.src = 'images/ideator_logo (1).png';
      document
        .querySelectorAll('.swiper-pagination-bullet')
        .forEach(blt => (blt.style.backgroundColor = 'white'));
    } else {
      if (navLogo) navLogo.src = 'images/Horizon_Logo_black.png';
      if (heroImg) heroImg.src = 'images/horizon-logo-white.png';
      if (logoIdeator) logoIdeator.src = 'images/ideator_logo (7).png';
      document
        .querySelectorAll('.swiper-pagination-bullet')
        .forEach(blt => (blt.style.backgroundColor = 'blue'));
    }
  };

  // Load saved mode from localStorage
  const isDarkMode = localStorage.getItem('theme') === 'dark';
  if (isDarkMode) {
    document.documentElement.classList.add('dark-mode');
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  } else {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  }
  updateLogo(isDarkMode);

  // Toggle Dark/Light Mode
  darkLightToggle.addEventListener('click', () => {
    const isNowDark = document.documentElement.classList.toggle('dark-mode');
    if (isNowDark) {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
      localStorage.setItem('theme', 'dark');
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
      localStorage.setItem('theme', 'light');
    }
    updateLogo(isNowDark);
  });
});

const french = document.querySelector('.french');
french.addEventListener('click', function (e) {
  e.preventDefault();
});
