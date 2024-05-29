//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1,2,3,4,5]

console.log(arr.reduce((acc, cur) => acc + cur, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squareArray(arr){
    return arr.map(x => x**2)
}

console.log(squareArray(arr))

//Create a function that takes string
//Print the reverse of that string to the console
let word = 'tuba'
function revString(str){
    return str.split('').reverse().join('')
}

console.log(revString(word))
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function isAPalindrome(str){
    let revWord = revString(str)
    if (str === revWord){
        return `${str} is a palindrome`
    }else {
        return `${str} is not a palindrome`
    }
}

console.log(isAPalindrome('abba'))