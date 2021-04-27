(function() {
  var popupCenter = function(url, title, width, height){
    var popupWidth = width || 600
    var popupHeight = height || 600
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
  
  var sharerS = document.querySelectorAll('a[data-sharer]')

  for(var i = 0; i < sharerS.length; i++) {
    var el = sharerS[i]
    sharer(el)
  }
  
  function sharer(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault()
      var data = el.getAttribute('data-sharer') // URL / TEXT / BY
          data = JSON.parse(data)
      popupCenter('https://www.pooks.fr/sharer?url=' + data.url + '&via=' + data.app + '&text=' + data.text, 'Partager');
    })
  }
})()