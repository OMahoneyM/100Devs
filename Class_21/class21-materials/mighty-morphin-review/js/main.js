// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = 'Christmas'
favHoliday = 'Thanksgiving'
console.log(favHoliday.toUpperCase())

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let tree = 'cyprus'
console.log(tree.substring(tree.length - 3))
// or
console.log(tree.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
let subFive100 = (n1,n2,n3,n4,n5) => Math.abs(100 - n1 - n2 - n3 - n4 - n5)

console.log(subFive100(1,2,3,4,5))

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
let lowHigh = (a, b, c) => {
    let arr = [a,b,c]
    arr.sort()
    return `${arr[0]}, ${arr[arr.length - 1]}`
}

console.log(lowHigh(1,3,2))

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
let coinFlip = () => {
    let flip = Math.random()
    if(flip < 0.5){
        return 'heads'
    } else{
        return 'tails'
    }
}

console.log(coinFlip())

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
let flipMany = x => {
    for (let i = 1; i <= x; i++){
        let result = coinFlip()
        console.log(result)
    }
}

flipMany(5)