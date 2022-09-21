const range = document.querySelector('.range')
const process  = document.querySelector('.process ')

const value  = document.querySelector('.process span ')

const body = document.querySelector('body')

function setProcess(percent){
    process.style.width = `${percent}%`
    value.innerHTML = `${percent}%`
    body.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`

}

setProcess(40)
range.addEventListener('mousemove', function(e){
    const processWidth = e.pageX - this.offsetLeft
    
    let percent = (processWidth / this.offsetWidth) * 100

    percent = Math.floor(percent)
    setProcess(percent)

})