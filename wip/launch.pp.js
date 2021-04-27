(function() {
  var smoothers = document.querySelectorAll('a.smoothers')
  for(var ikl = 0; ikl < smoothers.length; ikl++) {
    var el = smoothers[ikl]
    __smoothers(el)
  }
  function __smoothers(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault()
      smoothScroll.scrollTo(el.getAttribute('href'), 1000)
    })
  }
})()