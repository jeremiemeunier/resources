let hermesXHR = new XMLHttpRequest()

function hermes() {
  
  var recipient = document.querySelector('body')
  var loader = document.querySelector('[data-hermes-loader]')
  var links = document.querySelectorAll('a[href]')
      for(var i = 0; i < links.length; i++) {
        
        var link = links[i]
        if(!link.getAttribute('data-hermes-nolink')) {
          hermesFunction(link, recipient, loader)
        }
      }
}

function hermesFunction(el, dock, loader) {
  
  let destination = el.getAttribute('href')
  
  el.addEventListener('click', function(e) {

    e.preventDefault()
    var evt = new Event('hermesLoad', { "bubbles": true, "cancelable": false })
    document.dispatchEvent(evt)

    hermesXHR.onreadystatechange = function() {

      loader.classList.remove('hidden')
      loader.classList.add('visible')

      if(hermesXHR.readyState === 4) {

        loader.classList.remove('progress')
        loader.classList.add('finish')

        window.setTimeout(function() {
          loader.classList.add('hidden')
          loader.classList.remove('visible')
        }, 400)

        if(hermesXHR.status === 200 || hermesXHR.status === 404) {
          dock.innerHTML = hermesXHR.response

          let stateObj = { foo: "bar" }

          history.pushState(stateObj, el.textContent, destination)
          hermes()
        }
        else {
          alert('Nous n\'arrivons pas à contacter le serveur.')
          loader.classList.remove('finish')
          loader.classList.remove('progress')
        }
      } else {

        loader.classList.add('progress')
      }
    }

    hermesXHR.open('POST', destination, true)
    hermesXHR.send()
  })
}

window.onpopstate = function() {
  
  var dock = document.querySelector('[data-hermes-recipient]')
  var loader = document.querySelector('[data-hermes-loader]')
  
  hermesXHR.onreadystatechange = function() {
      
    loader.classList.remove('hidden')
    loader.classList.add('visible')
    
    var evt = new Event('hermesLoad', { "bubbles": true, "cancelable": false })
    document.dispatchEvent(evt)

    if(hermesXHR.readyState === 4) {

      loader.classList.add('finish')

      if(hermesXHR.status === 200) {
        dock.innerHTML = hermesXHR.response

        let scripts = document.querySelectorAll('[data-hermes-js]')
        let stateObj = { foo: "bar" }
        
        for(var j = 0; j < scripts.length; j++) {
          
          let script = scripts[j]
          reloadScript(script.getAttribute('src'), script)
        }
        
        history.pushState(stateObj, el.textContent, destination)
        window.scrollY = 0
        hermes()
      }
      else {
        alert('Nous n\'arrivons pas à contacter le serveur.')
      }
    } else {

      loader.classList.add('progress')
    }
  }
  
  hermesXHR.open('POST', document.location, true)
  hermesXHR.send()
}

function reloadScript (src, balise) {
  balise.setAttribute('src', null)
  balise.setAttribute('src', src)
}