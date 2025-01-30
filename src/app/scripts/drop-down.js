const button = document.querySelector('.teacher-dropdown__button');
const menu = document.querySelector('.teacher-dropdown__menu');
const options = document.querySelectorAll('.teacher-dropdown__option');
const sections = document.querySelectorAll('.teacher-sections__section');
const arrow = document.querySelector('.teacher-dropdown__arrow');

button.addEventListener('click', () => {
  menu.classList.toggle('open');
  button.classList.toggle('open');
});

options.forEach((option) => {
  option.addEventListener('click', () => {
    const selectedText = option.textContent;

    button.querySelector('span').textContent = selectedText;

    menu.classList.remove('open');
    button.classList.remove('open');

    options.forEach((opt) => opt.classList.remove('active'));
    sections.forEach((section) => section.classList.remove('active'));

    option.classList.add('active');
    document.getElementById(option.dataset.tab).classList.add('active');
  });
});
