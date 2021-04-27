(function () {
	
	var popUpCenter = function (url, title, width, height) {
		
		var popUpWidth = width || 640
		var popUpHeight = height || 360
		var windowLeft = window.screenLeft || window.screenX
		var windowTop = window.screenTop || window.screenY
		var windowWidth = window.innerWidth || document.documentElement.clientWidth
		var windowHeight = window.innerHeight || document.documentElement.clientHeight
		var popUpLeft = windowLeft + windowWidth / 2 - popUpWidth / 2
		var popUpTop = windowTop + windowHeight / 2 - popUpHeight / 2
		var popup = window.open(url, title, 'scrollbars=yes, width=' + popUpWidth + ', height=' + popUpHeight + ', top=' + popUpTop + ', left=' + popUpLeft)
		
		popUp.focus()
		return true
		
	}
	
	var twitterS = document.querySelectorAll('[data-social="twitter"]')
	var facebookS = document.querySelectorAll('[data-social="facebook"]')
	var googleS = document.querySelectorAll('[data-social="googleplus"]')
	
	for(var i = 0; i < twitterS.length; i++) {
		
		var twitter = twitterS[i]
		twitter.addEventListener('click', function (e) {
			
			e.preventDefault()
			var url = this.getAttribute('data-url')
			var by = this.getAttribute('data-by')
			var shareUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.title) + "&via=" + by + "&url=" + encodeURIComponent(url)
			popUpCenter(shareUrl, "Partager sur Twitter")
			
		})
		
	}
	
	for(var j = 0; j < facebookS.length; j++) {
		
		var facebook = facebookS[j]
		facebook.addEventListener('click', function (e) {
			
			e.preventDefault()
			var url = this.getAttribute('data-url')
			var shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url)
			popUpCenter(shareUrl, "Partager sur Facebook")
			
		})
		
	}
	
	for(var k = 0; k < googleS.length; k++) {
		
		var google = googleS[k]
		google.addEventListener('click', function (e) {
			
			e.preventDefault()
			var url = this.getAttribute('data-url')
			var shareUrl = "https://plus.google.com/share?url=" + encodeURIComponent(url)
			popUpCenter(shareUrl, "Partager sur Google+")
			
		})
		
	}
	
})()