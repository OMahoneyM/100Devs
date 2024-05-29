// *Variables*
// Create a variable and console log the value
let bark = "woof"
console.log(bark)
// Create a variable, add 10 to it, and alert the value
let ties = 5
ties += 10
alert(`${ties} ties is an awful lot of ties`)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNumbers(num1, num2, num3, num4){
    let result = num1 - num2 - num3 - num4
    alert(result)
}
// Create a function that divides one number by another and returns the remainder
function returnRemainder(num1, num2){
    let remainder = num1 % num2
    return remainder
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNumbersJumanji(num1, num2){
    let sum = num1 + num2
    if (sum > 50){
        alert('Jumanji!')
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeNumbersZebra(num1, num2, num3){
    let result = num1 * num2 * num3
    if (result % 3 == 0){
        alert('ZEBRA!')
    }
}