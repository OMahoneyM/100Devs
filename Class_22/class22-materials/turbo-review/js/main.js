// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = 'Coffee '
favDrink = favDrink.trim()
console.log(favDrink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let wordString = 'Some words that include apple'
function checkForApple(str){
    return str.split(' ').includes('apple')
}

console.log(checkForApple(wordString))

if(wordString.search('apple') !== -1){
    console.log('yes')
}else {
    console.log('no')
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let num = Math.random()
    if (num < 0.33){
        return 'Rock'
    }else if (num > 0.66){
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

console.log(rockPaperScissors())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(str){
    let botChoice = rockPaperScissors().toLowerCase()
    str = str.toLowerCase()

    if (str === botChoice){
        console.log('It is a draw')
    }else if((str === 'rock' && botChoice === 'scissors') || (str === 'paper' && botChoice === 'rock') || (str === 'scissors' && botChoice === 'paper')){
        console.log('You won!')
    } else {
        console.log('You lose')
    }
}

checkWin('Rock')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playArray(arr){
    arr.forEach(x => checkWin(x))
}

playArray(['rock', 'paper', 'scissors', 'rock'])