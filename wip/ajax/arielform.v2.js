function ArielForm(initalize = '') {
  var els = document.querySelectorAll('form[data-arielform]')
  var ariel_xhr = new XMLHttpRequest()

  for(var i = 0; i < els.length; i++) {
    var el = els[i]
    arielForm(el)
  }

  function arielForm(el) {

    var data = el.getAttribute('data-arielform')
        data = JSON.parse(data)
    var msgDock = document.querySelector(data.msgDock)
    var next = data.nextUrl
    var type = data.async
    var url = el.getAttribute('action')
    var submit = el.querySelector(data.submiter)
    var submitTxt = submit.innerHTML
    var submitLoad = data.submitLoad
        if(!submitLoad) { submitLoad = '<span class="load mini"></span>' }
    var restarter = false

    if(el.getAttribute('data-arielform-opts') !== null) {
      restarter = true
    }

    el.addEventListener('submit', function(e) {

      var form = new FormData(el)
      if(type === true) {

        e.preventDefault()

        var pS = el.querySelectorAll('p.dock-msg')
        for(var i = 0; i < pS.length; i++) {
          var p = pS[i]

          var parent = p.parentNode
          parent.removeChild(p)
        }

        ariel_xhr.onreadystatechange = function() {

          submit.disabled = true
          submit.classList.add('load')
          submit.innerHTML = submitLoad
          msgDock.classList.remove('success')
          msgDock.classList.remove('error')
          msgDock.classList.remove('info')
          msgDock.innerHTML = ''

          if(ariel_xhr.readyState === 4) {

            submit.classList.remove('load')
            submit.innerHTML = submitTxt

            var res = ariel_xhr.response
                res = JSON.parse(res)

            if(ariel_xhr.status === 200) {
              if(res.glob_msg !== undefined) {
                msgDock.classList.add('success')
                msgDock.innerHTML = res.glob_msg
              }

              if(restarter && restarter === true) {
                submit.disabled = false
              }
              else {
                if(next != null && next !== undefined) {
                  window.setTimeout(function() {
                    window.location.href = next
                  }, 2000)
                }
              }
            }
            else {
              submit.disabled = false
              submit.innerHMTL = submitTxt

              if(res.glob_msg !== undefined) {
                msgDock.classList.add('error')
                msgDock.innerHTML = res.glob_msg
              }

              if(!res.ref) {}
              else {
                var ref = res.ref

                for(var refTag in ref) {

                  var dock = el.querySelector('[data-arielform-ref="' + refTag + '"]')
                  var p = document.createElement('p')
                      p.classList.add('error')
                      p.classList.add('dock-msg')
                      p.innerHTML = ref[refTag].msg
                  dock.appendChild(p)
                }
              }
            }
          }
        }

        ariel_xhr.open('POST', url, true)
        if(initalize !== null || initalize !== '') { ariel_xhr.setRequestHeader('X-PooksUser-Key', initalize) }
        ariel_xhr.send(form)
      }
    })
  }
}