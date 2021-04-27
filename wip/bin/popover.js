var els = document.querySelectorAll('[data-popover]')
for(var i = 0; i < els.length; i++) {
	let el = els[i]
	popover(el)
}

function popover(el) {
	let data = el.getAttribute('data-popover')
			data = JSON.parse(data)
	
	el.setAttribute('style', 'position: relative')
	
			//Take size of element
	let elWidth = el.offsetWidth
	let elHeight = el.offsetHeight
	
			//Create default variable
	let title = data.title
	let content = data.content
	let position = data.position
	let stateStart = data.stateStart
	
			//Create poper
	let poper = document.createElement('div')
			poper.classList.add('poper')
			if(data.spes) { 
				let spes = data.spes
				if(spes === 'up') { poper.classList.add('upp') }
			}
			if(data.theme) {
				let theme = data.theme
				if(theme === 'dark') { poper.classList.add('drk') }
			}
	
	let poperDock = document.createElement('div')
			poperDock.classList.add('poper-dock')
			poper.appendChild(poperDock)

			//Create element in poper
	if(title != null && title !== '') {
		let poperTitle = document.createElement('div')
				poperTitle.classList.add('poper-title')
				poperTitle.innerHTML = title
				poperDock.appendChild(poperTitle)
	}
	if(content != null && content !== '') {
		let poperContent = document.createElement('div')
				poperContent.classList.add('poper-content')
				poperContent.innerHTML = content
				poperDock.appendChild(poperContent)
	}

			//Add class for position of poper
	if(position === 'top') {
		poper.classList.add('top')
	} else if(position === 'left') {
		poper.classList.add('left')
	} else if(position === 'right') {
		poper.classList.add('right')
	} else if(position === 'bottom') {
		poper.classList.add('bottom')
	}
	
	poperAdd(poper, el, position, stateStart)
}

function poperAdd(poper, el, pos, stateStart) {
	if(stateStart === 'open') {
		el.appendChild(poper)
		poperPosition(poper, el, pos)
	}
	else if(stateStart === 'onHover') {
		el.addEventListener('mouseover', function(e) {
			el.appendChild(poper)
			poperPosition(poper, el, pos)
		})
		
		el.addEventListener('mouseleave', function(e) {
			el.removeChild(poper)
		})
	}
	else if(stateStart === 'onClick') {
		el.addEventListener('click', function(e) {
			e.preventDefault()
			
			if(!el.contains(poper)) {
				el.appendChild(poper)
				poperPosition(poper, el, pos)
			}
			else { el.removeChild(poper) }
		})
	}
}

function poperPosition(poper, el, pos) {
	let poperWidth = poper.offsetWidth
	let poperHeight = poper.offsetHeight

	if(pos === 'top') {
		poper.setAttribute('style', 'bottom: 100%; left: calc(50% - '  + (poperWidth / 2) + 'px)')
	}
	else if(pos === 'bottom') {
		poper.setAttribute('style', 'top: 100%; left: calc(50% - '  + (poperWidth / 2) + 'px)')
	}
	else if(pos === 'left') {
		poper.setAttribute('style', 'right: 100%; top: calc(50% - '  + (poperHeight / 2) + 'px)')
	}
	else if(pos === 'right') {
		poper.setAttribute('style', 'left: 100%; top: calc(50% - '  + (poperHeight / 2) + 'px)')
	}
}
