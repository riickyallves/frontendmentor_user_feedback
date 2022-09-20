let userChoice = -1
let btns = document.getElementsByTagName("li")

/* Add an event listener to each 'li' item to catch the selected value by the user*/
for (let i=0; i < btns.length; ++i) {
    btns[i].addEventListener("click", function() {
        userChoice = btns[i].textContent
    }) 
} 


function showResults() {
    let divs = document.getElementsByTagName("div")

    if (userChoice === -1) {
        alert("Error! Input required.")
    }

    else {
        
        let selectedResult = document.getElementById("selected-result")
        selectedResult.textContent = `You selected ${userChoice} out of 5`

        for (let i = 0; i < divs.length; i++) {
            if (divs[i].classList.contains('input')) {
                divs[i].style.display = "none" 
            }
            
            if (divs[i].classList.contains('response')) {
                divs[i].style.display = "flex" 
            } 
        }
    }

   
}
