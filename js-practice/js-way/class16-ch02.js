// Improved hello
// Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.
let userFirstName = prompt('Enter your first name: ')
let userLastName = prompt('Enter you last name:')

alert(`Welcome ${userFirstName} ${userLastName}!`)

// Final values
// Observe the following program and try to predict the final values of its variables.

let a = 2; // 2
a -= 1; // 1
a++; // 2
let b = 8; // 8
b += 2; // 10
const c = a + b * b; // 102
const d = a * b + b; // 30
const e = a * (b + b); // 40
const f = a * b / a; // 10
const g = b / a * a; // 10
console.log(a, b, c, d, e, f, g);

// VAT calculation
// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.
let userPrice = Number(prompt('Enter a price:'))
userPrice = userPrice * 1.206
console.log(userPrice)

// From Celsius to Fahrenheit degrees
// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
let userTemp = Number(prompt('Enter a price:'))
userTemp = userTemp * 9/5 + 32
console.log(`${userTemp}F`)

// Variable swapping
// Observe the following program.

let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)
number1 = 3
number2 = 5

console.log(number1); // Should show 3
console.log(number2); // Should show 5