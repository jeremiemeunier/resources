if(document.querySelector('body').offsetHeight >= window.innerHeight + 800) {
  window.addEventListener('scroll', function(e) {

    let body = document.querySelector('body')
    let bodyHeight = body.offsetHeight
    let windowHeight = window.innerHeight

    if((window.scrollY + windowHeight) >= (bodyHeight - 300)) {
      body.classList.add('ps-head-nofix')
    }
    else { body.classList.remove('ps-head-nofix') }
  })
}