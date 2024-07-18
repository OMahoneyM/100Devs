//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
function ageChecker(age){
    if (age < 16) return "You can't drive"
    if (age < 18) return "You can't hate from outside the club because you can't ene get in"
    if (age < 21) return "You can't drink"
    if (age < 25) return "You can't rent cars affordably"
    if (age < 30) return "You can't rent fancy cars affordably"
    return 'There is nothing left to look forward to'
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
const h1 = document.querySelector('h1')
h1.addEventListener('click', responseInDOM)

function responseInDOM(){
    let userInput = Number(document.querySelector('#danceDanceRevolution').value)
    
    document.querySelector('p').innerText = ageChecker(userInput)

}