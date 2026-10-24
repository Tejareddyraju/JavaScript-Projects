const links = document.querySelectorAll('.nav-links')
const addExpenseButton = document.querySelector('#addExpenseBtn')
const expenseModal = document.querySelector("#expenseModal")
const expenseOverlay = document.querySelector("#expenseOverlay")

links.forEach(function (link){
    link.addEventListener("click", function(event){
        event.preventDefault()

        links.forEach(function(items){
            items.classList.remove("active")
        })
        link.classList.add("active")
    })
})

addExpenseButton.addEventListener("click",function(){
    expenseModal.classList.remove('hidden')
    expenseOverlay.classList.remove("hidden");
})