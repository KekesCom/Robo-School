const button = document.querySelector('.teacher-dropdown__button');
const menu = document.querySelector('.teacher-dropdown__menu');
const options = document.querySelectorAll('.teacher-dropdown__option');
const sections = document.querySelectorAll('.teacher-sections__section');
const arrow = document.querySelector('.teacher-dropdown__arrow');
const dropdownText = button.querySelector('span');

const openDropdown = () => {
  menu.classList.add('open');
  button.classList.add('open');
};

const closeDropdown = () => {
  menu.classList.remove('open');
  button.classList.remove('open');
};

button.addEventListener('click', () => {
  menu.classList.contains('open') ? closeDropdown() : openDropdown();
});

options.forEach((option) => {
  const optionText = option.textContent;

  option.addEventListener('click', () => {
    dropdownText.textContent = optionText;

    closeDropdown();

    options.forEach((option) => option.classList.remove('active'));
    sections.forEach((section) => section.classList.remove('active'));

    option.classList.add('active');
    document.getElementById(option.dataset.tab).classList.add('active');
  });
});

document.addEventListener('click', (event) => {
  if (!button.contains(event.target) && !menu.contains(event.target)) {
    closeDropdown();
  }
});
