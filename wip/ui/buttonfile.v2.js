function buttonFile(init) {
  var fil_dockS = document.querySelectorAll(init)

  for(var i = 0; i < fil_dockS.length; i++) { var fil_dock = fil_dockS[i]; uploader(fil_dock) }

  function uploader(el) {

    var button = el.querySelector('label')
    var fileInput = el.querySelector('input[type="file"]')
    var theReturn = el.querySelector('[data-filevalue]')

    button.addEventListener( "click", function(e) {
      fileInput.focus()
      return false
    })

    fileInput.addEventListener( "change", function(e) {
      var value = this.value
      var sub = value.substr(12)
      theReturn.innerHTML = sub
    })
  }
}