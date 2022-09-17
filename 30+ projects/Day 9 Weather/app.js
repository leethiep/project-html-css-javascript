const input = document.querySelector('.search');
const capital = document.querySelector('.capital')

const country = document.querySelector('.country')
const date = document.querySelector('.date')
const time = document.querySelector('.time-at')
const temperature = document.querySelector(' .value')
const mainDesc = document.querySelector('.description .main-desc')
const visibility = document.querySelector('.visibility span')
const wind = document.querySelector('.wind span')
const cloud = document.querySelector('.cloud span')


async function changeWeatherIU(inputValue)
{
    
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=e1e4f90302b8e15c4acccbe08d995eef`

    let data = await fetch(apiURL).then(res=>res.json())
    console.log(data)
    if(data.cod == 200){
        capital.innerText = data.name
        country.innerText = data.sys.country
        date.innerText = new Date().toLocaleString()
        temp = Math.round(data.main.temp - 273.15)
        temperature.innerText = temp
        mainDesc.innerText = data.weather[0].main
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        cloud.innerText = data.main.humidity + '%'
    }else {
        box.classList.add('hide')
    }
    if(temp >= 25){
        (document.body.className = 'hot')

    }else if(temp>=20 && temp < 25){
		(document.body.className = 'warn')

    }
    else 
		(document.body.className = 'cool')



}

input.addEventListener('keypress',function(e){
    if(e.code === "Enter"){
        let inputValue = input.value.trim() 
        changeWeatherIU(inputValue)
    }
    
})

changeWeatherIU('ha noi')