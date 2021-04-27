var els = document.querySelectorAll('[data-helpy]')
for(var i = 0; i < els.length; i++) {
	let el = els[i]
	helpy(el)
}

function helpy(el) {
			//Getting settings of the helpy
	let data = el.getAttribute('data-helpy')
			data = JSON.parse(data)
	
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
				document.appendChild(helpyContent)
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
  
  let parentHeight = el.offsetHeight
  let parentWidth = el.offsetWidth

	if(pos === 'top') {
		
	}
	else if(pos === 'bottom') {
		
	}
	else if(pos === 'left') {
		
	}
	else if(pos === 'right') {
		
	}
}