//Write your pseduo code first! 
//C to F
document.querySelector('h1').addEventListener('click', tempConvert)

function tempConvert(){
    let temp = Number(document.querySelector('input').value)

    //Convert temp
    temp = temp * 1.8 + 32

    //Show the value
    document.querySelector('h2').innerText = temp
}