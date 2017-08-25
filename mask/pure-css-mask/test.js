var mask = document.querySelector('.mask')

document.addEventListener('mousemove', function(e) {
  mask.style.top = e.clientY + 'px'
  mask.style.left = e.clientX + 'px'
})