var elsCookies = document.querySelectorAll('[data-cookies]')
for(var iCookies = 0; iCookies < elsCookies.length; iCookies++) {
	var elCookies = elsCookies[iCookies]
	__cookies(elCookies)
}

function __cookies(elCookies) {
	
	elCookies.addEventListener('click', function(e) {

		var data = this.getAttribute('data-cookies')
				data = JSON.parse(data)
		var name = data.nameCookies
		var value = data.valueCookies
		var domain = data.domainCookies
		var path = data.pathCookies
		var exp = data.expDateCookies
		var docker = data.dockerCookies
				if(docker !== null) {
					docker = document.querySelector(docker)
					docker.setAttribute('style', 'display: none;')
				}

		var cookChaine = ''
		var expirationDate = (3600 * 24 * exp)

		cookChaine += name + '=' + encodeURIComponent(value) + ';max-age=' + expirationDate + ';domain=' + domain + ';path=' + path + ';secure=' + true
		document.cookie = cookChaine
	})
}
