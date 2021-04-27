var els = document.querySelectorAll('[data-modal]')

for(var i = 0; i < els.length; i++) {
	var el = els[i]
	__modal(el)
}

function __modal(el) {

	var data = el.getAttribute('data-modal')
			data = JSON.parse(data)
	var modal = document.querySelector(data.modal)
	var action = data.action
	var body = document.querySelector('body')

	el.addEventListener('click', function(e) {

		e.preventDefault()

		if(action === 'open') {
			modal.classList.add('on')
			body.classList.remove('scrollY')
		}
		else if(action === 'close') {
			
			var openeds = document.querySelectorAll('modal.on')
			
			if(openeds.length === 1) {
				body.classList.add('scrollY')
			}
			modal.classList.remove('on')
		}
	})
}
