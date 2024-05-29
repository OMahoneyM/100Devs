//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1,2,3,4,5]
console.log(nums.reduce((acc, current) => acc + current,0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const squareArray = arr => arr.map(item => item ** 2)

console.log(squareArray(nums))

//Create a function that takes string
//Print the reverse of that string to the console
const reverseString = str => str.split('').reverse().join('')

console.log(reverseString('ploop'))

//Create a function that takes in a string
//Alert if the string is a palindrome or not
const checkForPalindrome = str => str === reverseString(str)

console.log(checkForPalindrome('toot'))