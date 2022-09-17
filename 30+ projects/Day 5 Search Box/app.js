var btn = document.querySelector('.search-box_btn')
btn.addEventListener('click', function(){
    this.parentElement.classList.toggle('open') 
    this.previousElementSibling.focus()
    
})
