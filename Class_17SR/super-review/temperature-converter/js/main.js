//Write your pseduo code first! 
//get user temp
//convert to F
//output value
document.querySelector('h1').addEventListener('click', convertTemp)

function convertTemp(){
    let temp = Number(document.querySelector('input').value)
    temp = temp * (9/5) + 32
    document.querySelector('h2').innerText = `${temp}F`
}