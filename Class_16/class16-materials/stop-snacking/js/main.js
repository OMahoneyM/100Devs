//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector('#help').addEventListener('click', stopSnacking)

function stopSnacking(a){
    let numOfSnacks = Number(document.querySelector('input').value)
    document.querySelector('#stops').innerText = ""
    for (i = 1; i <= numOfSnacks; i++){
        document.querySelector('#stops').innerText += " stop!"
    }
}