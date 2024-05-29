// Musketeers
//
// Write a program that:
//     Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
//     Shows each array element using a for loop.
//     Adds the "D'Artagnan" value to the array.
//     Shows each array element using the forEach() method.
//     Remove poor Aramis.
//     Shows each array element using a for-of loop.

let musketeers = ['Athos', 'Porthos', 'Aramis']
for(let i = 0; i < musketeers.length; i++){
    console.log(musketeers[i])
}
musketeers.push('D\'Artagnan')

musketeers.forEach(musketeer => {
    console.log(musketeer)
})

musketeers.splice(2,1)
for (const musketeer of musketeers){
    console.log(musketeer)
}


// Sum of values
//
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
const values = [3, 11, 7, 2, 9, 10];

let arraySum = array => {
    let sum = 0
    for (const element of array){
        sum += element
    }
    return sum
}

console.log(arraySum(values))


// Array maximum
//
// Write a program that creates the following array, then calculates and shows the array's maximum value.

const numbers = [3, 11, 7, 2, 9, 10];

let arrayMax = array => {
    let result = 0
    for(element of array){
        if (element > result){
            result = element
        }
    }
    console.log(result)
}
arrayMax(numbers)
//or
let findArrayMax = array => Math.max(...array);

console.log(findArrayMax(numbers))


// List of words
//
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
function listOfWords() {
    let words = []
    while(words[words.length - 1] !== 'stop'){
        let word = prompt('Enter a word: ')
        words.push(word)
    }

    words.pop()

    for(let word of words){
        console.log(word)
    }
}