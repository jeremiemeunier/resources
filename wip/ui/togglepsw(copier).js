var els = document.querySelectorAll('[data-togglepsw]')
for(var i = 0; i < els.length; i++) {
	var el = els[i]
	__togglepsw(el)
}

function __togglepsw(el) {
	
	var data = el.getAttribute('data-togglepsw')
			data = JSON.parse(data)
	var input = document.querySelector(data.input)
	var act = data.act
	var origins = data.stateOrigins
	var change = data.stateChange
	
	el.addEventListener('click', function(e) {
		e.preventDefault()
		
		if(input.getAttribute('type') === 'password') {
			input.setAttribute('type', 'text')
			__togglepswChanger(act, el, origins, change, input)
		} else {
			input.setAttribute('type', 'password')
			__togglepswChanger(act, el, origins, change, input)
		}
	})	
}

function __togglepswChanger(act, el, origins, change, input) {
	if(act === 'changeClass') {
		if(input.getAttribute('type') === 'text') {
			el.classList.remove(origins)
			el.classList.add(change)
		} else {
			el.classList.add(origins)
			el.classList.remove(change)
		}
	} else if(act === 'changeText') {
		if(input.getAttribute('type') === 'text') {
			el.innerText = change
		} else {
			el.innerText = origins
		}
	}
}