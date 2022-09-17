var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var removeAll = document.querySelector('.remove')


let tags = ['nodejs', 'reactjs']

function render (){
    content.innerHTML=' '
    for(i= 0; i < tags.length;i++)
    {
        const tag = tags[i];
        content.innerHTML +=`  <li> 
                                    ${tag}
        
                                    <i class="fa-solid fa-xmark" onclick="removeTag(${i})></i>
                                </li>`
        
        
    }
    content.appendChild(input)
        input.focus()
}
function removeTag(index){
    tags.slice(index,1)
    render()
}

input.addEventListener('keydown',function(event ){
    if (event.key == 'Enter')
    {
        tags.push(input.value.trim())
        render();
        input.value = ' '
    }
})
render();

removeAll.addEventListener('click', function(){
    tags= [];
    render()
})