let output = document.querySelector('div')
let input = document.getElementById('input')
let btn = document.getElementById('btn')
let erase = document.getElementById("erase")

function count(){
    let inputValue = input.value
    let outputValue = output.value
    inputLength = inputValue.length
    
    output.innerHTML = `Votre mot comporte ${inputLength} caractères`
    input.value = null
}


btn.addEventListener('click', count)

erase.addEventListener('click', ()=> {
    input.value = null
})
