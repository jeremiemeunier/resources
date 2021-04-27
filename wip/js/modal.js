var els = document.querySelectorAll('[data-modal]')

for(var i = 0; i < els.length; i++) {
	var el = els[i]
	__modal(el)
}

function __modal(el) {

	var data = el.getAttribute('data-modal');
			data = JSON.parse(data);
	var modal = document.querySelector(data.modal);
	var action = data.action;
	var body = document.querySelector('body');
	if(data.opts) { var opts = data.opts; }
  
	el.addEventListener('click', function(e) {

		e.preventDefault();

		if(action === 'toggle') {

			if(modal.classList.contains('modaler--on')) {
				modal.classList.remove('modaler--on');
			  body.classList.remove('no-scroll');
			} else {
				modal.classList.add('modaler--on');
				body.classList.add('no-scroll');
			}
		} else {
			if(action === 'open') {
				modal.classList.add('modaler--on');
				body.classList.add('no-scroll');
			}
			else if(action === 'close') {

				var openeds = document.querySelectorAll('.modaler--on');

				if(openeds.length === 1) {
					body.classList.remove('no-scroll');
				}
				modal.classList.remove('modaler--on');
			}
		}
	})
}