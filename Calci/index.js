const display = document.getElementById('display')
const clear = document.getElementById('clear')

function addToDisplay(valueByDisplay){
    display.value += valueByDisplay
}
 function calculate(){
    display.value = eval(display.value)
 }
clear.addEventListener("click",()=>{
    display.value = ''
})