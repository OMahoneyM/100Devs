//Write your pseduo code first!

//only on click
document.querySelector('#convert').addEventListener('click', convert)

function convert(){
    //Take user temperature input
    let temp = document.querySelector('#temp').value
//Convert temp from C to F
    temp = temp * 9/5 + 32
//Show the temperature in the DOM
    document.querySelector('#tempF').innerText = `${temp} F`
}