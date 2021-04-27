var tabnavXHR = new XMLHttpRequest()

var els = document.querySelectorAll('a[data-tabnav]')
for(var i = 0; i < els.length; i++) {
	var el = els[i]
	
	var auto = el.getAttribute('data-autolaunch')
	
	if(auto !== null) {
		tabnav(el)
	}
	
	el.addEventListener('click', function(e) {
		
		e.preventDefault()
		tabnav(this)
	})
}

function tabnav(el) {
	
	var tar = document.querySelector(el.getAttribute('data-tabnav'))
	var bor = el.getAttribute('data-border')
	var border = document.querySelector('span[data-border]')
	var url = el.getAttribute('href')
	
	tabnavXHR.onreadystatechange = function() {
		
		if(bor === 'toright') {
			border.classList.add('right')
			border.classList.remove('center')
			
		} else if(bor === 'tocenter') {
			border.classList.remove('right')
			border.classList.add('center')
			
		} else {
			border.classList.remove('right')
			border.classList.remove('center')
		}
		
		tar.innerHTML = '<span class="loading load little"><span></span></span>'
		tar.classList.add('load')
		
		if(tabnavXHR.readyState === 4) {
			var res = tabnavXHR.response
			
			tar.classList.remove('load')
			tar.innerHTML = res
			
		} else {
			
			
		}
	}
	
	tabnavXHR.open('POST', url, true)
	tabnavXHR.send()
}