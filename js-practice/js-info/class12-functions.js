// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
// Will the function work differently if else is removed?
// Answer: No there is no difference in function if else is removed. Both functions have the same behavior.

// Rewrite it, to perform the same, but without if, in a single line.

// Make two variants of checkAge:

//     Using a question mark operator ?
//     Using OR ||
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

// Function min(a, b)
// Write a function min(a,b) which returns the least of two numbers a and b.
function min(a, b) {
    if (a > b) {
        return b;
    }
    return a;
}

//Function pow(x,n)
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

let x = prompt('Enter a number:', '');
let n = prompt('Enter an exponent:', '');

function pow(x, n) {
    return (x**n);
}

if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
} else {
    alert(pow(x,n));
}