var eKey = document.querySelector('.card.key p:last-child')
var eLocation = document.querySelector('.card.location p:last-child')
var eWhich = document.querySelector('.card.which p:last-child')
var eCode = document.querySelector('.card.code p:last-child')
const box = document.querySelector('.box')
var result = document.querySelector('.result')

document.addEventListener("keydown", e =>{
    let keyName = e.keyCode === 32 ? 'Space' : e.key 
    document.querySelector('.alert').classList.add('hidden')
	box.classList.remove('hidden')

    

    eKey.innerText = keyName
    eLocation.innerText = e.location
    eWhich.innerText = e.which
    eCode.innerText = e.code
    result.innerText = e.which

})