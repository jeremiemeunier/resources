var imgs = document.querySelectorAll('[data-zoom-img]')
var bigImage = document.querySelector('[data-zoomer]')

for(var i = 0; i < imgs.length; i++) {
	
	var mini_img = imgs[i]
	
	mini_img.addEventListener('click', function(e) {
		
		e.preventDefault()
		var mini_imgAct = document.querySelectorAll('[data-zoom-img].active')
		var img = this.querySelector('img')
		var imgSrc = this.querySelector('img').getAttribute('src')
		var bigStyle = bigImage.getAttribute('style')
		
		for(var j = 0; j < mini_imgAct.length; j++) {
			
			if(mini_imgAct[j] != this) {
				
				mini_imgAct[j].classList.remove('active')
				this.classList.add('active')
				bigImage.setAttribute('src', imgSrc)
			}
		}
	})
}