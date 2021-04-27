window.addEventListener('scroll', function(e) {
  
  let topper = document.querySelector('[data-topper]')
  
  if(window.scrollY > 500) {
    topper.classList.add('active')
    topper.addEventListener('click', function(e) {
      e.preventDefault()
      
      smoothScroll.scrollTo(topper.getAttribute('href'), 1000)
    })
  }
  else { topper.classList.remove('active') }
})