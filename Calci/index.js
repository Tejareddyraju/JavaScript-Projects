const display = document.getElementById('display')
const clear = document.getElementById('clear')

function addToDisplay(valueByDisplay){
    display.value += valueByDisplay
}
 function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch{
        display.value = 'Error'
    }
 }
clear.addEventListener("click",()=>{
    display.value = ''
})