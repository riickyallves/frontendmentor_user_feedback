let userChoice = -1

function storeOne() {
    userChoice = 1
}

function storeTwo() {
    userChoice = 2
}

function storeThree() {
    userChoice = 3
}

function storeFour() {
    userChoice = 4
}

function storeFive() {
    userChoice = 5
}

function showResults() {
    let divs = document.getElementsByTagName("div")

    if (userChoice === -1) {
        alert("Error! Input required.")
    }

    else {
        
        let selectedResult = document.getElementById("selected-result")
        selectedResult.innerText = `You selected ${userChoice} out of 5`

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