var els = document.querySelectorAll('div.psw-elmt')
for(var i = 0; i < els.length; i++) {
	var el = els[i]
	togglePsw(el)
}

function togglePsw(el) {
	
	var input = el.querySelector('input')
	var toggle = el.querySelector('.toggle-psw')
	var toggleTxt = toggle.textContent
	
	toggle.addEventListener('click', function(e) {
		
		e.preventDefault()
		
		if(input.getAttribute('type') === 'password') {
			input.setAttribute('type', 'text')
			toggle.innerText = 'Cacher'
		} else {
			input.setAttribute('type', 'password')
			toggle.innerText = 'Afficher'
		}
	})
}
