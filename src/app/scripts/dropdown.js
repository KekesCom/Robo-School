const button = document.querySelector('.teacher-dropdown__button');
const menu = document.querySelector('.teacher-dropdown__menu');
const options = document.querySelectorAll('.teacher-dropdown__option');
const sections = document.querySelectorAll('.teacher-sections__section');
const arrow = document.querySelector('.teacher-dropdown__arrow');
const dropdownText = document.querySelector('.teacher-dropdown__text');

const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModal');

const defaultOption = options[0];

const openDropdown = () => {
  menu.classList.add('open');
  button.classList.add('open');
};

const closeDropdown = () => {
  menu.classList.remove('open');
  button.classList.remove('open');
};

const resetDropdown = () => {
  options.forEach((option) => option.classList.remove('active'));
  sections.forEach((section) => section.classList.remove('active'));

  defaultOption.classList.add('active');
  dropdownText.textContent = defaultOption.textContent;
  document.getElementById(defaultOption.dataset.tab).classList.add('active');
};

button.addEventListener('click', () => {
  menu.classList.contains('open') ? closeDropdown() : openDropdown();
});

options.forEach((option) => {
  option.addEventListener('click', () => {
    dropdownText.textContent = option.textContent;

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

const closeModal = () => {
  modal.classList.remove('open');
  document.body.style.overflow = '';

  resetDropdown();
};

closeModalButton.addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
