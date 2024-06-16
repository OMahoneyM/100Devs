//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
let party = ['ivysaur', 'sandslash', 'bellsprout', 'butterfree', 'mankey']

const revParty = arr => arr.reverse()

console.log(revParty(party))

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

let a = [1,2,3,4,5]
let b = [6,7,8,9,10]

function aGreaterThanB(arr1, arr2){
    arr1 = arr1.reduce((acc, current) => acc + current ** 2, 0)
    arr2 = arr2.reduce((acc, current) => acc + Math.pow(current, 3), 0)
    return arr1 > arr2
}

console.log(aGreaterThanB(a, b))

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function multiArrays(arr){
    return arr.filter((e, i) => Math.abs(e) % i === 0)
}

console.log(multiArrays([22, -6, 32, 82, 9, 25]))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumStringInts(arr){
    return arr.reduce((acc, current) => acc + Number(current),0)
}

console.log(sumStringInts(['1','2','3','4','5']))

// single line
const s = r => r.reduce((a, c) => +a + +c)

console.log(s(['1','2','3','4','5']))
