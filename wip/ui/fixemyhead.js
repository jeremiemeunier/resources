var els = document.querySelectorAll('[data-fixemyhead]')
for(var i = 0; i < els.length; i++) {
	var el = els[i]
	fixeMyHead(el)
}

function fixeMyHead(el) {
	let height = el.offsetHeight
	
	if(window.scrollY > 0) {
		if(window.scrollY > height) {
			el.classList.add('fixed')
		}
	}
	
	window.addEventListener('scroll', function() {
		let scrollY = window.scrollY
		
		if(scrollY > height) {
			el.classList.add('fixed')
		} else {
			el.classList.remove('fixed')
		}
	})
}