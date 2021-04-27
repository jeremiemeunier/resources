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
  let footer = data.footer
	let position = data.position
	let stateStart = data.stateStart
  let positionType = data.positionType
	
			//Create poper
	let poper = document.createElement('div')
			poper.classList.add('poper')
			if(data.spes) { 
				let spes = data.spes
				if(spes === 'up') { poper.classList.add('upp') }
				else if(spes === 'bigger') { poper.classList.add('bigger') }
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
				poper.classList.add('with-title')
	}
	if(content != null && content !== '') {
		let poperContent = document.createElement('div')
				poperContent.classList.add('poper-content')
				poperContent.innerHTML = content
				poperDock.appendChild(poperContent)
	}
	if(footer != null && footer !== '') {
		let poperFooter = document.createElement('div')
				poperFooter.classList.add('poper-footer')
				poperFooter.innerHTML = footer
				poperDock.appendChild(poperFooter)
				poper.classList.add('with-footer')
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
  
  if(positionType === 'fixed') {
		poper.classList.add('fixed')
  } else { poper.classList.add('absolute') }
	
	poperAdd(poper, el, position, stateStart, positionType)
}

function poperAdd(poper, el, pos, stateStart, positionType) {
  
  let body = document.querySelector('body')
  
	if(stateStart === 'onClick') {
		el.addEventListener('click', function(e) {
			e.preventDefault()
      
      let closer = poper.querySelectorAll('[data-popover-closer]')
      for(var j = 0; j < closer.length; j++) {
        closer[j].addEventListener('click', function(e) {
          if(body.contains(poper)) {
            body.removeChild(poper)
          }
        })
      }
			
			if(!body.contains(poper)) {
				body.appendChild(poper)
				poperPosition(poper, el, pos, positionType)
			}
			else { body.removeChild(poper) }
		}, true)
	}
  if(stateStart === 'open') {
    body.appendChild(poper)
    poperPosition(poper, el, pos, positionType)
  }
}

function poperPosition(poper, el, pos, posType) {
	let poperWidth = poper.offsetWidth
	let poperHeight = poper.offsetHeight
  
  let parentWidth = el.offsetWidth
  let parentHeight = el.offsetHeight
  
  let windowWidth = window.innerWidth

	if(pos === 'top') {
		let left = parentWidth / 2 - poperWidth / 2 + el.getBoundingClientRect().left
    let top
    
    if(posType === 'fixed') {
      top = el.getBoundingClientRect().top - parentHeight - poperHeight / 2
    } else { top = el.getBoundingClientRect().top + parentHeight - poperHeight - document.documentElement.scrollTop }
    
    if((left + poperWidth) > windowWidth) {
      left = windowWidth - poperWidth - 40
    }
    
    poper.style.left = left + 'px'
    poper.style.top = top + 'px'
	}
	else if(pos === 'bottom') {
		let left = parentWidth / 2 - poperWidth / 2 + el.getBoundingClientRect().left
    let top
    
    if(posType === 'fixed') {
      top = el.getBoundingClientRect().top + parentHeight
    } else { top = el.getBoundingClientRect().top + parentHeight + document.documentElement.scrollTop }
    
    if(left < 20) { left = 20 }
    if((left + poperWidth) > windowWidth) {
      left = windowWidth - poperWidth - 40
    }
    
    poper.style.left = left + 'px'
    poper.style.top = top + 'px'
	}
	else if(pos === 'left') {
		let top
    
    if(posType === 'fixed') {
      top = el.getBoundingClientRect().top + parentHeight / 2 - poperHeight / 2
    } else { top = el.getBoundingClientRect().top + parentHeight / 2 - poperHeight / 2 + document.documentElement.scrollTop }
    
    let left = el.getBoundingClientRect().left - poperWidth
    
    if(left < 20) { left = 20 }
    if((left + poperWidth) > windowWidth) {
      left = windowWidth - poperWidth - 40
    }
    
    poper.style.top = top + 'px'
    poper.style.left = left + 'px'
	}
	else if(pos === 'right') {
    let top
    
    if(posType === 'fixed') {
      top = el.getBoundingClientRect().top + parentHeight / 2 - poperHeight / 2
    } else { top = el.getBoundingClientRect().top + parentHeight / 2 - poperHeight / 2 + document.documentElement.scrollTop }
    
    let right = el.getBoundingClientRect().right - poperWidth
    
    poper.style.top = top + 'px'
    poper.style.right = right + 'px'
	}
}