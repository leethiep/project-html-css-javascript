var listImg = document.querySelectorAll('.list-img img ')

var imgMain = document.querySelector('.img-main img')

var prevBtn = document.querySelector('.prev')

var nextBtn = document.querySelector('.next')


 var currentIndex = 0

 function setImg(index){
    currentIndex = index;
    imgMain.src = listImg[currentIndex].src

    listImg.forEach((item) => {
		item.classList.remove('active')
	})
    listImg[currentIndex].classList.add('active')

    
 

 }


 listImg.forEach((img, index)=>{
    img.addEventListener('click',(e) =>{
       
        setImg(index)
        console.log(img)
    })
 })

nextBtn.addEventListener('click', ()=>{
    if(currentIndex == listImg.length - 1)
    currentIndex = 0
    else 
    currentIndex++
    setImg(currentIndex)
})


prevBtn.addEventListener('click', ()=>{
    if(currentIndex == 0)
    currentIndex = listImg.length - 1
    else 
    currentIndex--
    setImg(currentIndex)
})