document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal');
  const closeModalButton = document.getElementById('closeModal');

  // Скрыть модальное окно при загрузке страницы
  modal.style.display = 'none';
  document.body.style.overflow = ''; // Включить скролл, если был отключён ранее

  // Открытие модального окна при клике на ссылку
  document.querySelectorAll('.teachers-block__link').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Предотвратить переход по ссылке
      modal.style.display = 'flex'; // Показать модальное окно
      document.body.style.overflow = 'hidden'; // Отключить скролл
    });
  });

  // Закрытие модального окна при клике на кнопку
  closeModalButton.addEventListener('click', function () {
    modal.style.display = 'none'; // Скрыть модальное окно
    document.body.style.overflow = ''; // Включить скролл
  });

  // Закрытие модального окна при клике вне его содержимого
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none'; // Скрыть модальное окно
      document.body.style.overflow = ''; // Включить скролл
    }
  });

  // Таб навигация
  const tabs = document.querySelectorAll('.modal__tab');
  const sections = document.querySelectorAll('.modal__section');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      // Удалить активный класс у всех табов и секций
      tabs.forEach(function (tabItem) {
        tabItem.classList.remove('active');
      });
      sections.forEach(function (section) {
        section.classList.remove('active');
      });

      // Добавить активный класс к текущему табу и связанной секции
      tab.classList.add('active');
      const targetSection = document.getElementById(tab.dataset.tab);
      targetSection.classList.add('active');
    });
  });
});
