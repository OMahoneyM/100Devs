//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

let age

if (age < 16){
    console.log("You can't drive.")
} else if (age >= 16 && age < 18) {
    console.log("You can't hate from outside the club, because they can't even get in") 
} else if (age >= 18 && age < 21) {
    console.log("You can't drink.") 
} else if (age >= 21 && age < 25) {
    console.log("You can't rent cars affordably.")
} else if (age >= 25 && age < 30) {
    console.log("You can't rent fancy cars affordably.")
} else {
    console.log("There is nothing left to look forward to...")
}


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph


document.querySelector('h1').addEventListener('click', ageVerify)

function ageVerify() {
    let userInput = document.querySelector('#danceDanceRevolution').value
    let pOutput = document.querySelector('p')
    if (userInput < 16){
        pOutput.innerText = "You can't drive."
    } else if (userInput < 18) {
        pOutput.innerText = "You can't hate from outside the club, because they can't even get in"
    } else if (userInput < 21) {
        pOutput.innerText = "You can't drink."
    } else if (userInput < 25) {
        pOutput.innerText = "You can't rent cars affordably."
    } else if (userInput < 30) {
        pOutput.innerText = "You can't rent fancy cars affordably."
    } else {
        pOutput.innerText = "There is nothing left to look forward to..."
    }
}