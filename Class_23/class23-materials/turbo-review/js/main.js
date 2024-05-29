// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = "this is a sentence?"
console.log(sentence.endsWith('?'))

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let multiWord = 'you are a jr. dev'
multiWord = multiWord.replaceAll("jr. dev", "software engineer")

console.log(multiWord)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let x = Math.random()
    if (x < 0.33){
        return 'rock'
    } else if(x < 0.66) {
        return 'paper'
    } else {
        return 'scissors'
    }
}
console.log(rockPaperScissors())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(choice){
    choice = choice.toLowerCase()
    let bot = rockPaperScissors()
    if( (choice === 'rock' && bot === 'scissors') || (choice === 'paper' && bot === 'rock') || (choice === 'scissors' && bot === 'paper') ){
        console.log("You win!")
    } else if ( choice === bot ){
        console.log("It\'s a tie")
    } else {
        console.log("Better luck next time")
    }
}

checkWin('rock')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playXTimes (arr){
    arr.forEach(item => checkWin(item))
}

playXTimes(['rock', 'paper','scissors','rock'])