//
//Carousel
//
//Write a program that launches a carousel for 10 turns, showing the turn number each time.
let turn = 1
while (turn <= 10){
    console.log(turn)
    turn++
}

//When it's done, improve it so that the number of turns is given by the user.
let userTurn = prompt("Number of turns on the carousel:")
while (userTurn > 0){
    console.log(userTurn)
    userTurn--
}

//
//Parity
//
// Check the following program that shows even numbers (divisible by 2) between 1 and 10.
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
}

// Improve the program so that it also shows odd numbers.
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    }else{
        console.log(`${i} is odd`);
    }
  }

// Improve it again to replace the initial number 1 by a number given by the user.
let userNum = prompt("Enter a number:")
for (let i = 1; i <= 10; i++) {
    if (userNum % 2 === 0) {
      console.log(`${userNum} is even`);
    }else{
        console.log(`${userNum} is odd`);
    }
    userNum++
}

//
//Input Validation
//
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
let inputNum = prompt("Enter a number:")
while (inputNum >= 100) {
    inputNum = prompt("Enter a number:")
}

// When you are done with the above, improve the program so that the terminating number is between 50 and 100.
let inputNumber = prompt("Enter a number:")
while (inputNumber >= 100 || inputNumber <= 50) {
    inputNumber = prompt("Enter a number:")
}

// 
// Multiplication table
// 
// Write a program that asks the user for a number, then shows the multiplication table for this number.
let numberMultiply = prompt("Enter a number:")
let product = 0
for (let i = 1; i <=12; i++){
    product = i * numberMultiply
    console.log(`${numberMultiply} x ${i} = ${product}`)
}

// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).
for (let i = 1; i <=12; i++){
    if (numberMultiply > 2 && numberMultiply < 9){
        product = i * numberMultiply
        console.log(`${numberMultiply} x ${i} = ${product}`)
    }
}

// 
// Neither yes nor no
// 
// Write a program that plays "neither yes, nor no" with the user. Specifically, the program asks the user to enter text until either "yes" or "no" is typed, which ends the game.
let ask = prompt("Enter a word:")
while (ask != "yes" && ask != "no") {
    ask = prompt("Enter a word:")
}

// 
// FizzBuzz
// 
// Write a program that shows all numbers between 1 and 100 with the following exceptions:

//     It shows "Fizz" instead if the number is divisible by 3.

//     It shows "Buzz" instead if the number is divisible by 5 and not by 3.
function fizzBuzz(){
    for (i = 1; i <= 100; i++){
        if (i % 3 == 0){
            console.log('Fizz')
        } else if (i % 5 == 0){
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}
fizzBuzz()

// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.
function fizzBuzz2(){
    for (i = 1; i <= 100; i++){
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz')
        } else if (i % 3 == 0){
            console.log('Fizz')
        } else if (i % 5 == 0){
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}
fizzBuzz2()


// !!! note
//This exercise has [many, many solutions](http://www.tomdalling.com/blog/software-design/fizzbuzz-in-too-much-detail/). It's a [job interview classic](http://imranontech.com/2007/01/24/using-fizzbuzz-to-find-developers-who-grok-coding/) that a significant number of candidates fail. Try your best!