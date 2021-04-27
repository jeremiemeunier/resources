function progressRead(el) {
  
  window.addEventListener('scroll', function(e) {
    var bar = document.querySelector(el)
    var hFooter = document.querySelector('footer.ps-footer').offsetHeight
    var h = document.querySelector('body').offsetHeight - hFooter
    var s = window.scrollY
    var w = window.innerHeight

    var t = (s / h) * w
    var p = Math.ceil((s + t) / h * 100)

    bar.setAttribute('style', 'width:' + p + '%')
  })
}