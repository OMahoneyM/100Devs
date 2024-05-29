//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let shows = ['Community', '30 Rock', 'Parks and Recreation', 'Arrested Development']

shows.forEach(item => console.log(item))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [1,2,3,4,5,6,7,8,9]

let makeArrayNums = arr => {
    return arr.filter(item => item % 2 === 0)
}

console.log(makeArrayNums(nums))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
let array = [5,4,2,1,3,6]

let secondBest = arr => {
    arr.sort((a, b) => a - b)
    return arr[1] + arr[arr.length - 2]
}

console.log(secondBest(array))