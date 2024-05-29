//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ['The Godfather', 'Godfather II', 'Godfather III']
movies.forEach((x,i) => document.querySelector('h2').innerText += ` ${x}`)

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let number = [1,2,3,4,5]
number.forEach((x,i) => number[i]= x + 3)
console.log(number)
//Find the average of all the numbers from question three
let numSum = 0
number.forEach((x,i) => numSum += x)
// or
// for(let i = 0; i < number.length; i++){
//     sum += number[i]
// }

console.log(numSum)
console.log(numSum / number.length)