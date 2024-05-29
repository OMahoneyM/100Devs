//Write your pseduo code first! 




document.querySelector('#convert').addEventListener('click', cToF)

function cToF() {
    //grab a temperature value from the user
    let temp = document.querySelector('#tempC').value
    //plug in temperature into the conversion formula
    temp = temp * 9/5 + 32
    //output the converted temperature
    document.querySelector('#tempF').innerText = temp
}