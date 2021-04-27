var searcherXHR = new XMLHttpRequest()
var els = document.querySelectorAll('[data-searcher]')
for(var i = 0; i < els.length; i++) {
	var el = els[i]
	searcher(el)
}

function searcher(el) {

	let parent = el.parentNode
	let url = el.getAttribute('data-searcher-url')

	let lists = document.createElement('div')
			lists.classList.add('fm--lists-result')
			parent.appendChild(lists)
	let list = parent.querySelector('.fm--lists-result')

	el.addEventListener('keyup', function(e) {
		var val = this.value
				list.innerHTML = ''

		searcherXHR.onreadystatechange = function() {

			if(searcherXHR.readyState === 4) {

				if(searcherXHR.status === 200) {

					let res = searcherXHR.response
							res = JSON.parse(res)

					for(var i = 0; i < res.length; i++) {
						var data = res[i]
            var icon
            if(data.icon) { icon = data.icon } else { icon = '#' }
								list.innerHTML += '<a class="wave-effect" href="' + data.url + '"><img src="' + icon + '" class="icon" /><p>' + data.title + '</p></a>'
					}
				}
			}
		}

		searcherXHR.open('GET', url + '?q=' + val, true)
		searcherXHR.send()
	})
}