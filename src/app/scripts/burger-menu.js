const menuButton = document.querySelector('.header-buttons__menu');
const closeButton = document.querySelector('.burger-menu__close');
const burgerMenu = document.querySelector('.burger-menu');
const body = document.body;

menuButton.addEventListener('click', () => {
  burgerMenu.classList.add('active');
  body.classList.add('no-scroll');
});

closeButton.addEventListener('click', () => {
  burgerMenu.classList.remove('active');
  body.classList.remove('no-scroll');
});

const menuLinks = document.querySelectorAll('.burger-menu__link');
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    body.classList.remove('no-scroll');
  });
});
