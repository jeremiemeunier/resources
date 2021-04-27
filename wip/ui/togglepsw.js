var els = document.querySelectorAll('[data-togglepsw]')
for(var i = 0; i < els.length; i++) {
	var el = els[i]
	togglePsw(el)
}

function togglePsw(el) {
	var toggler = el.querySelector('span')
	var input = el.querySelector('input')
	
	toggler.addEventListener('click', function(e) {
		e.preventDefault()
		
		var parent = this.parentNode
		if(parent.classList.contains('toggle')) {
			parent.classList.remove('toggle')
			input.setAttribute('type', 'password')
		} else {
			parent.classList.add('toggle')
			input.setAttribute('type', 'text')
		}
	})
}