var els = document.querySelectorAll('[data-jumper]')
for(var i = 0; i < els.length; i++) {
	var el = els[i]
	jumper(el)
}

function jumper(el) {
	
	var data = el.getAttribute('data-jumper')
			data = JSON.parse(data)
	var nbStep = data.nbJump
	var start = data.start
	
	var els = el.querySelectorAll('input')
	
	
}