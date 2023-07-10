// function openCity(evt, cityName) {
// 	var i, tabcontent, tablinks
// 	tabcontent = document.getElementsByClassName('tabcontent')
// 	for (i = 0; i < tabcontent.length; i++) {
// 		tabcontent[i].style.display = 'none'
// 	}
// 	tablinks = document.getElementsByClassName('tablinks')
// 	for (i = 0; i < tablinks.length; i++) {
// 		tablinks[i].className = tablinks[i].className.replace(' active', '')
// 	}
// 	document.getElementById(cityName).style.display = 'block'
// 	evt.currentTarget.className += ' active'
// }
// let tabData = [
// 	{ id: 0, title: 'Yanvar-Mart' },
// 	{ id: 1, title: 'Yanvar-Sentabr' },
// 	{ id: 2, title: 'Yanvar-Dekabr' },
// 	{ id: 3, title: 'Yanvar-Mart' }
// ]

// let tab = document.querySelector('.tab')
// let tableBtnS = []

// tabData.forEach(element => {
// 	let tabBtn = document.createElement('button')
// 	tabBtn.classList.add('tablinks')
// 	tabBtn.innerHTML = element.title

// 	tab.appendChild(tabBtn)

// 	tabBtn.addEventListener('click', event => {
// 		element.id
// 	})
// })
