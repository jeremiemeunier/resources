window.onload = function() {
  let elS = document.querySelectorAll('[data-fuller]')
  for(var k = 0; k < elS.length; k++) {
    let el = elS[k]
    fuller(el)
  }
}

window.addEventListener('resize', function(e) {
  let elS = document.querySelectorAll('[data-fuller]')
  for(var k = 0; k < elS.length; k++) {
    let el = elS[k]
    fuller(el)
  }
})


function fuller(el) {
  
  let windowHeight = window.innerHeight
  let removeHeight = el.getAttribute('data-fuller')
      windowHeight = windowHeight - removeHeight
  
  el.setAttribute('style', 'min-height:' + windowHeight + 'px;')
}