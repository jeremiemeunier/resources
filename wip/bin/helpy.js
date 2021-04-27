var els = document.querySelectorAll('[data-helpy]')
for(var i = 0; i < els.length; i++) {
	let el = els[i]
	helpy(el)
}

function helpy(el) {
			//Getting settings of the helpy
	let data = el.getAttribute('data-helpy')
			data = JSON.parse(data)
	
			//Set position at relative value on the parent element
	el.setAttribute('style', 'position: relative')
	
			//Take size of element
	let elWidth = el.offsetWidth
	let elHeight = el.offsetHeight
	
			//Create default variable
	let content = data.content
	let position = data.position
	
			//Create helpy
	let helpy = document.createElement('div')
			helpy.classList.add('helpy')
	
			//Create element in helpy
	if(content != null && content !== '') {
		let helpyContent = document.createElement('div')
				helpyContent.classList.add('helpy-content')
				helpyContent.innerHTML = content
				helpy.appendChild(helpyContent)
	}
	
			//Add class for position of helpy
	if(position === 'top') {
		helpy.classList.add('top')
	} else if(position === 'left') {
		helpy.classList.add('left')
	} else if(position === 'right') {
		helpy.classList.add('right')
	} else if(position === 'bottom') {
		helpy.classList.add('bottom')
	}
	
	helpyAdd(helpy, el, position)
}

		//Adding the helpy at the parent element
function helpyAdd(helpy, el, pos) {
	el.addEventListener('pointerover', function(e) {
		el.appendChild(helpy)
		helpyPosition(helpy, el, pos)
	})

	el.addEventListener('pointerleave', function(e) {
		el.removeChild(helpy)
	})
}

		//Positionnig helpy element at ce center of the parent element
function helpyPosition(helpy, el, pos) {
	let helpyWidth = helpy.offsetWidth
	let helpyHeight = helpy.offsetHeight

	if(pos === 'top') {
		helpy.setAttribute('style', 'bottom: 100%; left: calc(50% - '  + (helpyWidth / 2) + 'px)')
	}
	else if(pos === 'bottom') {
		helpy.setAttribute('style', 'top: 100%; left: calc(50% - '  + (helpyWidth / 2) + 'px)')
	}
	else if(pos === 'left') {
		helpy.setAttribute('style', 'right: 100%; top: calc(50% - '  + (helpyHeight / 2) + 'px)')
	}
	else if(pos === 'right') {
		helpy.setAttribute('style', 'left: 100%; top: calc(50% - '  + (helpyHeight / 2) + 'px)')
	}
}
