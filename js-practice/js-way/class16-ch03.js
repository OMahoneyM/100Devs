// falsy values include:
// fasle, undefined, null, NaN, 0, "" or ''

// Following day
// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.
let day = prompt('Enter a day of the week:').toLowerCase()

if (day == 'monday') {
    console.log('tuesday')
} else if (day == 'tuesday') {
    console.log('wednesday')
} else if (day == 'wednesday') {
    console.log('thursday')
} else if (day == 'thursday') {
    console.log('friday')
} else if (day == 'friday') {
    console.log('saturday')
} else if (day == 'saturday') {
    console.log('sunday')
} else if (day == 'sunday') {
    console.log('monday')
} else {
    console.log('You have not entered a day of the week.')
}

// Number comparison
// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
let num1 = Number(prompt('Enter first number:'))
let num2 = Number(prompt('Enter second number:'))

if (num1 < num2){
    console.log(`${num1} is less than ${num2}`)
} else if (num1 > num2){
    console.log(`${num1} is greater than ${num2}`)
} else if (num1 == num2){
    console.log(`${num1} is equal to ${num2}`)
} else {
    console.log('One of your responses was not a number.')
}

// Final values
// Take a look at the following program.
let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);

// Initial values 	    nb1 final value 	nb2 final value 	nb3 final value
// nb1=nb2=nb3=4 		       0                   4 	               12
// nb1=4,nb2=3,nb3=2 		   4                   3                   2
// nb1=2,nb2=4,nb3=0 		   3                   4                   0


// Number of days in a month
// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.
let month = Number(prompt('Enter in a month number:'))

switch (month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(31)
        break;
    case 2:
        console.log(28)
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(30)
        break;
    default:
        console.log('You did not enter an appropriate month number.')
}


// Following second
// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

// This is not as simple as it seems... Look at the following results to see for yourself:

//     14h17m59s should give 14h18m0s
//     6h59m59s should give 7h0m0s
//     23h59m59s should give 0h0m0s (midnight)

// get 3 inputs from user
// if seconds are 59 then add one to minutes
// if minutes = 59 then add 1 to hours
// if hour = 23 and the above conditions are true, output 0h0m0s

let inputHrs
let inputMins
let inputSecs

inputHrs = Number(prompt('Enter a value for hours:'))
inputMins = Number(prompt('Enter a value for minutes:'))
inputSecs = Number(prompt('Enter a value for seconds:'))

if ((inputSecs >= 60) || (inputMins >= 60) || (inputHrs >= 24) || (isNaN(inputSecs) == true) || (isNaN(inputMins) == true) || (isNaN(inputHrs) == true)){
    console.log('You entered an invalid number.')
} else {
    if ((inputSecs == 59) && (inputMins == 59) && (inputHrs == 23)) {
        inputSecs = 0
        inputMins = 0
        inputHrs = 0
        console.log(`${inputHrs}h${inputMins}m${inputSecs}s`)
    } else if ((inputSecs == 59) && (inputMins == 59)) {
        inputSecs = 0
        inputMins = 0
        inputHrs++
        console.log(`${inputHrs}h${inputMins}m${inputSecs}s`)
    } else if ((inputSecs == 59)){
        inputSecs = 0
        inputMins++
        console.log(`${inputHrs}h${inputMins}m${inputSecs}s`)
    } else {
        inputSecs++
        console.log(`${inputHrs}h${inputMins}m${inputSecs}s`)
    }
}
