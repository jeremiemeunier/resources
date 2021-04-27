function __auto_co() {
	
	var xhr_autoco = new XMLHttpRequest()
	var dock = document.querySelector('[data-autoco]')
	var tab = dock.getAttribute('data-autoco')
			tab = JSON.parse(tab)
	var url = tab.url
	var msg = dock.querySelector('div')
	
	var refresh_S = document.querySelectorAll('[data-autoco-refresh]')
	
	xhr_autoco.onreadystatechange = function() {
		
		dock.classList.add('active')
		msg.innerHTML = '<p>Authentification en cours...</p><span class="load mini"></span>'
		
		if(xhr_autoco.readyState === 4) {
			
			if(xhr_autoco.status === 200) {
				
				var res = xhr_autoco.response
				var RES = JSON.parse(res)
				
				if(RES.login === 'success') {
					
					msg.innerHTML = '<p>Authentification réussie</p><i class="material-icons">check</i>'
					dock.classList.add('success')
					
					window.setTimeout(function () {
						
						dock.classList.remove('active')
						
						for(var i = 0; i < refresh_S.length; i++) {
							
							var refresh = refresh_S[i]
							__auto_co_refresh(refresh)
						}
					
					}, 2500)
				}
				else if(RES.login === 'failure') {
					
					dock.classList.add('error')
					msg.innerHTML = '<p>Authentification ratée</p><i class="material-icons">clear</i>'
					
					window.setTimeout(function () { dock.classList.remove('active') }, 2500)
					window.setTimeout(function () { 
						if(tab.formType === 'url') {
							
							window.location.href = tab.form
						} else {
							
							var mod = document.querySelector(tab.form)
							mod.classList.add('on')
						}
						
					}, 2000)
				}
			}
			else {
				
				msg.innerHTML = "<p>Une erreur c'est produite lors de votre authentification (" + xhr_autoco.status + ")</p>"
			}
		}
	}
	
	xhr_autoco.open('POST', url, true)
	xhr_autoco.send()
}

function __auto_co_refresh(el) {
	
	var refresh_xhr = new XMLHttpRequest()
	
	var data = el.getAttribute('data-autoco-refresh')
			data = JSON.parse(data)
	
	
	console.log(data)
	var url = data.url
	var async = data.async
	var color = data.loadColor
	
	refresh_xhr.onreadystatechange = function() {
		
		el.classList.add('load')
		el.innerHTML = '<span class="load mini ' + color + '"></span>'
		
		if(refresh_xhr.readyState === 4) {
			
			if(refresh_xhr.status === 200) {
				
				window.setTimeout(function() {
					
					el.classList.remove('load')
					el.innerHTML = refresh_xhr.response
				}, 1000)
			}
		}
	}
	
	refresh_xhr.open('POST', url, true)
	refresh_xhr.send()
}
