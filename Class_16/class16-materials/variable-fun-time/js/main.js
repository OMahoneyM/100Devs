//--- Easy
//create a variable and assign it a number
let number = 5
//minus 10 from that number
number -= 10
//print that number to the console
console.log(number)
//--- Medium
//create a variable that holds a value from the input
// let userInput = document.querySelector('#danceDanceRevolution').value
// //add 25 to that number
// userInput += 25
// //alert that number
// alert(userInput)
//--- Hard
//create a variable that holds the h1
const headerMain = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
headerMain.addEventListener('click', sum)

// function sum() {
//     console.log(number + Number(userInput))
// }

function sum() {
    let userInput = document.querySelector('#danceDanceRevolution').value
    console.log(number + Number(userInput))
}