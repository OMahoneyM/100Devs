// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let boole = true
alert(boole)

// Declare a variable, reassign it to your favorite color, and console log the value
let favoriteColor
favoriteColor = 'green'
console.log(favoriteColor)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function addThreeAndDivide(a,b,c,d){
    return (a + b + c) / d
}
console.log(addThreeAndDivide(2,2,2,2))

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function firstPowerSecond(a, b){
    console.log(a ** b)
}
firstPowerSecond(12,2)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function booleanString(a, b){
    if (a){
        alert(b)
    }else {
        console.log(b)
    }
}

const alertOrString = (bool, string) => bool ? alert(string) : console.log(string)
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function fizzBuzz (num){
    for (let i = 1; i <= num; i++){
        if((i % 3 === 0) && (i % 5 === 0)){
            console.log('FizzBuzz')
        }else if(i % 3 === 0){
            console.log('Fizz')
        }else if(i % 5 === 0){
            console.log('Buzz')
        }else{
            console.log(i)
        }
    }
}

fizzBuzz(20)

newArr = ['1','2','3','4','5']

console.log(newArr)

newArr[1] = '20'

console.log(newArr)