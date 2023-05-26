function showElement(element) {
  element.style.display = 'flex'
  element.style.opacity = '1'
  element.style.transition = 'opacity 0.5s'
}

function hideElement(element) {
  if (element) {
    element.style.opacity = '0'
    element.style.transition = 'opacity 0.5s'

    setTimeout(function () {
      element.style.display = 'none'
    }, 300)
  }
}