// *Variables*
// Create a variable and console log the value
let num = 10;
console.log(num)
// Create a variable, add 10 to it, and alert the value
let num2 = 5
num2 += 10
alert(num2)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNums(a,b,c,d){
    alert(a - b - c - d);
}
subFourNums(100, 10, 10, 10)

// Create a function that divides one number by another and returns the remainder
function divide(a, b){
    return a % b;
}
console.log(divide(10, 5))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoJumanji(a,b){
    if (a + b > 50)
        alert('Jumanji')
}
addTwoJumanji(25,100)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiThreeNums(a,b,c){
    if (a * b * c % 3 === 0)
        alert('ZEBRA')
}
multiThreeNums(3,3,3)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordNTimes(str, num){
    for (let i = 1; i <= num; i++){
        console.log(str);
    }
}

wordNTimes('pie', 3)