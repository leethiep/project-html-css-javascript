var images = document.querySelectorAll(".wrapper .image img");
var gallery = document.querySelector(".gallery");
var galleryImg = document.querySelector(".gallery_inner img");
var close = document.querySelector(".gallery .close");
var next = document.querySelector(".control.next");
var prev = document.querySelector(".control.prev");

let currentIndex = 0;



function showGallery (){
    if(currentIndex == 0 ){
        prev.classList.add("hide")
    }else {
        prev.classList.remove("hide")
    }

    if(currentIndex == images.length - 1){
        next.classList.add("hide")
    }else{
        next.classList.remove("hide")
    }

    gallery.classList.add("show")
    galleryImg.src = images[currentIndex].src;
}



close.addEventListener("click",()=>{
    galleryImg.classList.remove("show");
});

next.addEventListener("click", ()=>{
    if(currentIndex < images.length-1){
        currentIndex--;
        showGallery();
    }
})

prev.addEventListener("click", ()=>{
    if(currentIndex > 0){
        currentIndex++;
        showGallery();
    }
})



