var ajaxtionXHR = new XMLHttpRequest()
var els = document.querySelectorAll('[data-ajaxtion]')
for(var i = 0; i < els.length; i++) {
	var el = els[i]

	el.addEventListener('click', ajaxtion(el, e))
}

function ajaxtion(el, e) {
  
  if(typeof(el) === 'string') {
    el = document.querySelector(el)
  }
  
  if(typeof(e) !== 'undefined') {
    e.preventDefault() // Remove default comportement
  }
  
	var data = el.getAttribute('data-ajaxtion') // Get datas
			data = JSON.parse(data)
	var url = data.url // Define the url to call
	var res_type = data.responseType // Define the response type
	var res_content = data.responseContent // Define the content of the response
	if(data.afterAction) {
		var after = data.afterAction
		// Define the action after the success of ajaxtion call
	}

  ajaxtionXHR.onreadystatechange = function() {
    el.classList.add('ajaxtion--pending') // Add the ajaxtion--pending class at the element

    if(ajaxtionXHR.readyState === 4) {

      if(ajaxtionXHR.status === 200) {

        // All as ready
        el.classList.remove('ajaxtion--pending')
        el.classList.add('ajaxtion--success')

        if(res_type === 'addClass') {
          if(data.reponseContainer) {
            let container = document.querySelectorAll(data.responseContainer)
                container.classList.add(res_content)
          }
          else { el.classList.remove(res_content) }
        }
        else if(res_type === 'removeClass') {
          if(data.reponseContainer) {
            let container = document.querySelectorAll(data.responseContainer)
                container.classList.remove(res_content)
          }
          else { el.classList.remove(res_content) }
        }
        else if(res_type === 'changeText') {
          if(data.reponseContainer) {
            let container = document.querySelectorAll(data.responseContainer)
                container.innerText = res_content
          }
          else { el.innerText = res_content }
        }
        else if(res_type === 'changeHTML') {
          if(data.reponseContainer) {
            let container = document.querySelectorAll(data.responseContainer)
                container.innerHTML = res_content
          }
          else { el.innerHTML = res_content }
        }
        else if(res_type === 'flashMsg') {
          var body = document.querySelector('body')
          var flash = document.createElement('div')
              flash.classList.add('flash')
              flash.classList.add('infos')
          var text = document.createElement('p')
              text.innerHTML = res_content

              flash.appendChild(text)
              body.appendChild(flash)
        }

        if(after) {
          if(after === 'redirect') {
            var redirect = data.afterDetails

            window.location = redirect
          }
        }
      } else {

        // An error
        el.classList.remove('ajaxtion--pending')
        el.classList.add('ajaxtion--failure')
      }
    }
  }

  ajaxtionXHR.open('POST', url, true)
  ajaxtionXHR.send()
}
