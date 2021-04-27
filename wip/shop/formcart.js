var els = document.querySelectorAll('[data-formcart]')
var xhr_cart = new XMLHttpRequest()

for(var i = 0; i < els.length; i++) {
	var el = els[i]
	formCart(el)
}

function formCart(el) {
	let data = el.getAttribute('data-formcart')
			data = JSON.parse(data)
	let url = data.action
	let body = document.querySelector('body')
	let icon = document.querySelector(data.cartCounter)
	let dest = document.querySelector(data.receip)
	
	el.addEventListener('submit', function(e) {
		e.preventDefault()
		
		let form = new FormData(el)
		
		xhr_cart.onreadystatechange = function() {
			
			if(xhr_cart.readyState === 4) {
				
				let res = xhr_cart.response
						res = JSON.parse(res)
				let dom = res.product_htmlDom
				let count = res.basket_count
				
				if(xhr_cart.status === 200) {
					
					dest.innerHTML = dom
					icon.innerHTML = count
					dest.classList.add('on')
					body.classList.remove('scrollY')
					let els = dest.querySelectorAll('[data-modal]')
					for(var j = 0; j < els.length; j++) {
						let el = els[j]
						__modal(el)
					}
				}
			}
		}

		xhr_cart.open('POST', url, true)
		xhr_cart.send(form)
	})
}