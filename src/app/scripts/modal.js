const modal = document.getElementById('modal');
const teacherLinks = document.querySelectorAll('.teachers-block__link');
const closeModalButton = document.getElementById('closeModal');

const openModal = () => {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  modal.classList.remove('open');
  document.body.style.overflow = '';
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

const tabs = document.querySelectorAll('.teacher-tabs__tab');
const sections = document.querySelectorAll('.teacher-sections__section');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tabItem) => {
      tabItem.classList.remove('active');
    });
    sections.forEach((section) => {
      section.classList.remove('active');
    });
    tab.classList.add('active');
    const targetSection = document.getElementById(tab.dataset.tab);
    targetSection.classList.add('active');
  });
});
