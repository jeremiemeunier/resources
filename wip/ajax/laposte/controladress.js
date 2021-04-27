var els = document.querySelectorAll('[data-laposte-controladress]')
for(var i = 0; i < els.length; i++) {
	var el = els[i]
	controlAdress(el)
}

function controlAdress(el) {
	
	let parent = el.parentNode
	let url = 'https://api.laposte.fr/controladresse/v1/adresses'
	
	let lists = document.createElement('div')
			lists.classList.add('laposte--lists-adress')
			parent.appendChild(lists)
	let list = parent.querySelector('.laposte--lists-adress')
	
	el.addEventListener('keyup', function(e) {
		var val = this.value
				list.innerHTML = ''
		
		laposteXHR.onreadystatechange = function() {
			
			if(laposteXHR.readyState === 4) {
				
				if(laposteXHR.status === 200) {
					
					let res = laposteXHR.response
							res = JSON.parse(res)
					
					for(var num in res) {
						var data = res[num]
								list.innerHTML += '<a onclick="chooseAdress(' + data.code + ')">' + data.adresse + '</a>'
					}
				}
			}
		}
		
		laposteXHR.open('GET', url + '?q=' + val, true)
		laposteXHR.setRequestHeader('X-Okapi-Key', '1trTFAEY1V9TmSFnJFirRKask4lb6GXr7lOn1ikk+plyeTFnRH6akjELk0T8zfgx')
		laposteXHR.send()
	})
}

function chooseAdress(codeAdress) {
	
	laposteXHR.onreadystatechange = function() {
		
		if(laposteXHR.readyState === 4 && laposteXHR.status === 200) {
			
			var els = document.querySelectorAll('[data-laposte-validadress]')
			let res = JSON.parse(laposteXHR.responseText)
			
			for(var i = 0; i < els.length; i++) {
				
				let el = els[i]
				let data = el.getAttribute('data-laposte-validadress')
						data = JSON.parse(data)
				let dataPart = data.part
				
				if(dataPart === "roadName") { el.value = res.numeroVoie + ' ' + res.libelleVoie }
				else if(dataPart === "complement") { el.value = res.pointRemise }
				else if(dataPart === "postalCity") { el.value = res.codePostal + ' ' + res.commune }
			}
		}
	}
	
	laposteXHR.open('GET', 'https://api.laposte.fr/controladresse/v1/adresses/' + codeAdress, true)
	laposteXHR.setRequestHeader('X-Okapi-Key', '1trTFAEY1V9TmSFnJFirRKask4lb6GXr7lOn1ikk+plyeTFnRH6akjELk0T8zfgx')
	laposteXHR.send()
}