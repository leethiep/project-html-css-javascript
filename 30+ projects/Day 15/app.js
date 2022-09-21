var input = document.querySelector('.input')
var items = document.querySelector('.items')

const listItems = []
getData()
function getData() {
    fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        
        .then(result => {
           // console.log(result)
            result.forEach((item) => {
                const div = document.createElement('div')
                div.setAttribute('class', 'item ')
                
                // listItems.push(item)
                listItems.push(div)
                
                div.innerHTML = `
                    <img src="${item.image}" alt="" >
                    <div class="detail">
                        <h4 class="description">${item.title}</h4>
                        <p class="price">${item.price}</p>
                    </div>`
                    items.appendChild(div)
            })
        });
}
// var input = document.querySelector('input')
input.addEventListener('input', (e)=>{
    filterData(e.target.value)
    // filterData(data)
})

function filterData (data){
    // console.log(data)
    listItems.forEach((item)=>{
        
        if (item.innerText.toLowerCase().includes(data.toLowerCase())) {
            // console.log(item)
   
			item.classList.remove('hide')
		} else {
			item.classList.add('hide')
		}
    })
   
    
}