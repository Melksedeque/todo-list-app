function showElement(element) {
  element.style.opacity = '1'
  element.style.transition = 'all 0.5s ease'

  setTimeout(function () {
    element.style.display = 'flex'
  }, 300)
}

function hideElement(element) {
  if (element) {
    element.style.opacity = '0'
    element.style.transition = 'all 0.5s ease'

    setTimeout(function () {
      element.style.display = 'none'
    }, 300)
  }
}