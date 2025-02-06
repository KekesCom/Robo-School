const modal = document.getElementById('modal');
const teacherLinks = document.querySelectorAll('.teachers-block__link');
const closeModalButton = document.getElementById('closeModal');

const tabs = document.querySelectorAll('.teacher-tabs__tab');
const sections = document.querySelectorAll('.teacher-sections__section');

const dropdownButton = document.querySelector('.teacher-dropdown__button span');
const dropdownOptions = document.querySelectorAll('.teacher-dropdown__option');

const defaultOption = dropdownOptions[0];

const openModal = () => {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  modal.classList.remove('open');
  document.body.style.overflow = '';

  tabs.forEach((tab) => tab.classList.remove('active'));
  sections.forEach((section) => section.classList.remove('active'));

  defaultOption.classList.add('active');
  dropdownButton.textContent = defaultOption.textContent;
  document.getElementById(defaultOption.dataset.tab).classList.add('active');
};

teacherLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    openModal();
  });
});

closeModalButton.addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tabItem) => tabItem.classList.remove('active'));
    sections.forEach((section) => section.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});
