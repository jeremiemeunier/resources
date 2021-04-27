var els = document.querySelectorAll('[data-attrs]')
for(var i = 0; i < els.length; i++) {
	var el = els[i]
	__attrs(el)
}

function __attrs(el) {
	
	var data = el.getAttribute('data-attrs')
			data = JSON.parse(data)
	var img = data.img
	var dock = document.querySelector(data.dockImage)
	
	el.addEventListener('click', function(e) {
		e.preventDefault()
		
		var selects = document.querySelectorAll('[data-attrs].is-selected')
		for(var j = 0; j < selects.length; j++) {
			if(selects[j] != this) {
				selects[j].classList.remove('is-selected')
			}
		}

		this.classList.add('is-selected')
		dock.setAttribute('src', img)
	})
}