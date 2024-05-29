//--- Easy
//create a variable and assign it a number
let num1 = 20
//minus 10 from that number
num1 -= 10
//print that number to the console
console.log(num1)
//--- Medium
//create a variable that holds a value from the input
let userInputNum = Number(document.querySelector('input').value)
//add 25 to that number
userInputNum += 25
//alert that number
alert(userInputNum)
//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click', sum)

function sum (){
    result = num1 + userInputNum
    h1.innerText = result
}
