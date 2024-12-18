const content = document.querySelector('.teachers__content');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const scrollbar = document.querySelector('.controls__scrollbar');
const thumb = document.querySelector('.controls__thumb');

const cardWidth = 360;
const gap = 40;
const scrollStep = cardWidth + gap;
let maxScroll = content.scrollWidth - content.clientWidth;

const updateButtons = () => {
  prevButton.disabled = content.scrollLeft <= 0;
  nextButton.disabled = content.scrollLeft >= maxScroll;
};

const updateThumbWidth = () => {
  const visibleRatio = content.clientWidth / content.scrollWidth;
  thumb.style.width = `${visibleRatio * 100}%`;
};

const updateThumbPosition = () => {
  const scrollLeft = content.scrollLeft;
  const scrollRatio = scrollLeft / maxScroll;
  const scrollbarWidth = scrollbar.clientWidth - thumb.clientWidth;
  thumb.style.left = `${scrollRatio * scrollbarWidth}px`;
};

const handlePrevClick = () => {
  content.scrollBy({ left: -scrollStep, behavior: 'smooth' });
};

const handleNextClick = () => {
  content.scrollBy({ left: scrollStep, behavior: 'smooth' });
};

const handleScroll = () => {
  updateThumbPosition();
  updateButtons();
};

let isDragging = false;
let startX;
let thumbStartLeft;

const handleMouseDown = (event) => {
  isDragging = true;
  startX = event.clientX;
  thumbStartLeft = parseInt(window.getComputedStyle(thumb).left, 10);
  document.body.classList.add('no-select');
};

const handleMouseMove = (event) => {
  if (!isDragging) {
    return;
  }

  const deltaX = event.clientX - startX;
  const scrollbarWidth = scrollbar.clientWidth - thumb.clientWidth;
  let newLeft = thumbStartLeft + deltaX;

  newLeft = Math.max(0, Math.min(newLeft, scrollbarWidth));

  const scrollRatio = newLeft / scrollbarWidth;
  content.scrollLeft = scrollRatio * maxScroll;
};

const handleMouseUp = () => {
  isDragging = false;
  document.body.classList.remove('no-select');
};

const handleResize = () => {
  maxScroll = content.scrollWidth - content.clientWidth;
  updateThumbWidth();
  updateThumbPosition();
  updateButtons();
};

prevButton.addEventListener('click', handlePrevClick);
nextButton.addEventListener('click', handleNextClick);
content.addEventListener('scroll', handleScroll);
thumb.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);
window.addEventListener('resize', handleResize);

updateThumbWidth();
updateThumbPosition();
updateButtons();
