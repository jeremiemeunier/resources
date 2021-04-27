function Sommaire(contain, target){
	this.contain = contain
	this.target = target
	this.uls = [document.createElement('ul')]
	this.buildStructure()
}

Sommaire.prototype.buildStructure = function() {
	
	var titles = this.contain.querySelectorAll('h2, h3, h4, h5, h6')
	var lastLvl = 0

	var sommaire = document.querySelector(this.target)
	var uls = [document.createElement('ul')]
	uls[0] = sommaire

	for(var i = 0; i < titles.length; i++) {

		var title = titles[i]
		var lvl = parseInt(title.tagName.replace('H', '')) -1
		
		if(lvl - lastLvl > 1) {
			
			throw "Erreur dans la structure des titres, saut de H" + (lastLvl + 1) + " vers H" + (lvl + 1)
		}
		var lastLvl = lvl
		var li = document.createElement('li')
		var a = document.createElement('a')
		a.setAttribute('href', '#')
		a.textContent = title.textContent
		li.appendChild(a)

		if(!this.uls[lvl - 1]) {

			var ul = document.createElement('ul')
			this.uls[lvl - 1] = ul
			this.uls[lvl - 2].lastChild.appendChild(ul)
		}
		this.uls[lvl] = null
		this.uls[lvl - 1].appendChild(li)
		this.bindScroll(a, title)
	}
}

Sommaire.prototype.bindScroll = function(a, title) {
	
	a.addEventListener('click', function(e) {
		
		e.preventDefault()
		var toppy = title.offsetTop - 90
		document.body.scrollTop = toppy

	})
}

Sommaire.prototype.appendTo = function(element){
	
	element.appendChild(this.uls[0])
}

var som = document.querySelector('[data-sommaire]')

if(som !== null) {
  var s = new Sommaire(document.querySelector('[data-sommaire]'))
  s.appendTo(document.querySelector('[data-sommaire-target]'))
}