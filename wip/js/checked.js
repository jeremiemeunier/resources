var els = document.querySelectorAll('[data-checked]')
for(var i = 0; i < els.length; i++) {
	var el = els[i]
	__checked(el)
}

function __checked(el) {
	
	el.addEventListener('change', function(e) {
		e.preventDefault()
		
		var data = el.getAttribute('data-checked')
				data = JSON.parse(data)
		var ils = document.querySelectorAll(data.el)
		
		for(var j = 0; j < ils.length; j++) {
			
			var il = ils[j]
			if(el.checked === true) {
				il.disabled = false
        il.classList.remove('disabled')
			}
			else {
        il.disabled = true
        il.classList.add('disabled')
      }
		}
	})
}