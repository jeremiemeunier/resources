function __stripePayment(publicKey) {
	var stripe = Stripe(publicKey);
	var stripe_xhr = new XMLHttpRequest()

	// Create an instance of Elements
	var elements = stripe.elements();

	// Custom styling can be passed to options when creating an Element.
	// (Note that this demo uses a wider set of styles than the guide below.)
	var style = {
		base: {
			color: '#32325d',
			lineHeight: '24px',
			fontFamily: '"Montserrat", Helvetica, sans-serif',
			fontSmoothing: 'antialiased',
			fontSize: '16px',
			'::placeholder': {
				color: '#aab7c4'
			}
		},
		invalid: {
			color: '#fa755a',
			iconColor: '#fa755a'
		}
	}

	// Create an instance of the card Element
	var card = elements.create('card', {style: style})

	// Add an instance of the card Element into the `card-element` <div>
	card.mount('#card-element')

	// Handle real-time validation errors from the card Element.
	card.addEventListener('change', function(event) {
		var displayError = document.getElementById('card-errors')
		if (event.error) {
			displayError.textContent = event.error.message
		} else {
			displayError.textContent = ''
		}
	});

	// Handle form submission
	var form = document.getElementById('payment-form');
	form.addEventListener('submit', function(e) {

		var modal = document.querySelector('[data-paymentmodal]')
		var loader = modal.querySelector('div.loadingDiv')

		e.preventDefault()
		modal.classList.add('load')

		stripe.createToken(card).then(function(result) {
			if (result.error) {
				// Inform the user if there was an error
				var errorElement = document.getElementById('card-errors')
				errorElement.textContent = result.error.message
			} else {
				// Send the token to your server
				var el = document.createElement('input')
						el.setAttribute('type', 'hidden')
						el.setAttribute('name', 'stripeToken')
						el.value = result.token.id
				form.appendChild(el)
				
				var forms = new FormData(form)
				
				stripe_xhr.onreadystatechange = function() {
					modal.classList.add('load')
					loader.innerHTML = '<span class="load dark"></span>'
					
					if(stripe_xhr.readyState === 4) {
						modal.classList.add('processing')

						if(stripe_xhr.status === 200) {
							modal.classList.remove('processing')
							modal.classList.add('done')
							loader.innerHTML = '<i class="material-icons">check</i><p class="m50top f400">Votre paiement à été accepter</p>'
							
							var res = stripe_xhr.response
									res = JSON.parse(res)
							var orderId = res.order_id
							
							window.setTimeout(function() {
								window.location.href = '/me/order/' + orderId
							}, 2000)
						} else {
							modal.classList.remove('load')
							modal.classList.remove('processing')
							modal.classList.remove('done')
						}
					}
				}

				stripe_xhr.open('POST', form.getAttribute('action'), true)
				stripe_xhr.send(forms)
			}
		});
	})
}