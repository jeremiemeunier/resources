(function() {
  var popupCenter = function(url, title, width, height){
    var popupWidth = width || 420
    var popupHeight = height || 520
    var windowLeft = window.screenLeft || window.screenX
    var windowTop = window.screenTop || window.screenY
    var windowWidth = window.innerWidth || document.documentElement.clientWidth
    var windowHeight = window.innerHeight || document.documentElement.clientHeight
    var popupLeft = windowLeft + windowWidth / 2 - popupWidth / 2 
    var popupTop = windowTop + windowHeight / 2 - popupHeight / 2
    var popup = window.open(url, title, 'scrollbars=yes, width=' + popupWidth + ', height=' + popupHeight + ', top=' + popupTop + ', left=' + popupLeft)
    popup.focus()
    return true
  }

  document.querySelector('a[data-logger]').addEventListener('click', function(e) {
    e.preventDefault()
    var data = this.getAttribute('data-logger')
        data = JSON.parse(data)
    popupCenter(data.url, data.connector);
  })
})()