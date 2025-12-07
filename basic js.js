const a = document.querySelector('h1')

function hero(){
    console.log("this is hero");
    
}

a.addEventListener('click',hero)

a.addEventListener('click', ()=>{
        alert("button is clicked")    
})

