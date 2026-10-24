const food = document.getElementById("food")
const food1 = document.getElementById("food1")
const food2 = document.getElementById("food2")
const food3 = document.getElementById("food3")
const food4 = document.getElementById("food4")

food1.addEventListener("click",()=>{
    food.style.backgroundImage = "url('/UI_Jpg/food1.png')"
})
food2.addEventListener("click",()=>{
    food.style.backgroundImage = "url('/UI_Jpg/food2.png')"
})
food3.addEventListener("click",()=>{
    food.style.backgroundImage = "url('/UI_Jpg/food3.png')"
})
food4.addEventListener("click",()=>{
    food.style.backgroundImage = "url('/UI_Jpg/food4.png')"
})