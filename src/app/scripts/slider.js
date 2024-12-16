document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.teachers__content')
  const prevButton = document.getElementById('prev')
  const nextButton = document.getElementById('next')
  const scrollbar = document.querySelector('.controls__scrollbar')
  const thumb = document.querySelector('.controls__thumb')

  const cardWidth = 360
  const gap = 40
  const scrollStep = cardWidth + gap
  const maxScroll = content.scrollWidth - content.clientWidth

  const updateThumbPosition = () => {
    const scrollLeft = content.scrollLeft
    const scrollRatio = scrollLeft / maxScroll
    const scrollbarWidth = scrollbar.clientWidth - thumb.clientWidth
    thumb.style.left = `${scrollRatio * scrollbarWidth}px`
  }

  const updateButtons = () => {
    prevButton.disabled = content.scrollLeft <= 0
    nextButton.disabled = content.scrollLeft >= maxScroll
  }

  prevButton.addEventListener('click', () => {
    content.scrollBy({ left: -scrollStep, behavior: 'smooth' })
  })

  nextButton.addEventListener('click', () => {
    content.scrollBy({ left: scrollStep, behavior: 'smooth' })
  })

  let isDragging = false
  let startX
  let thumbStartLeft

  thumb.addEventListener('mousedown', e => {
    isDragging = true
    startX = e.clientX
    thumbStartLeft = parseInt(window.getComputedStyle(thumb).left, 10)
    document.body.classList.add('no-select')
  })

  document.addEventListener('mousemove', e => {
    if (!isDragging) return
    const deltaX = e.clientX - startX
    const scrollbarWidth = scrollbar.clientWidth - thumb.clientWidth
    let newLeft = thumbStartLeft + deltaX

    newLeft = Math.max(0, Math.min(newLeft, scrollbarWidth))

    const scrollRatio = newLeft / scrollbarWidth
    content.scrollLeft = scrollRatio * maxScroll
  })

  document.addEventListener('mouseup', () => {
    isDragging = false
    document.body.classList.remove('no-select')
  })

  content.addEventListener('scroll', () => {
    updateThumbPosition()
    updateButtons()
  })

  updateThumbPosition()
  updateButtons()
})
