// ----------------------------------------------------------------
// Translate border-left-width to borderLeftWidth
// importance: 5

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// P.S. Hint: use split to split the string into an array, transform it and join back.
function camelize(str){
    str = str.split('-')

    for(let i = 1; i < str.length; i++){
        str[i] = str[i][0].toUpperCase() + str[i].slice(1)
    }

    return str.join("")
}
console.log(camelize("background-color"), "backgroundColor")

function camelize(str){
    return str.split('-').map((e, idx) => idx === 0 ? e : e[0].toUpperCase() + e.slice(1)).join("")
}
console.log(camelize("background-color"), "backgroundColor")


// ----------------------------------------------------------------
// Filter range
// importance: 4

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)

function filterRange(arr, a, b){
    return arr.filter(e => e >= a && e <= b)
}
console.log(filterRange([5,3,8,1], 1, 4), [3,1])


// ----------------------------------------------------------------
// Filter range "in place"
// importance: 4

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]
function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr = [5, 3, 8, 1];
console.log(filterRange(arr, 1, 4), [3,1])
console.log(arr)


// ----------------------------------------------------------------
// Sort in decreasing order
// importance: 4

// let arr = [5, 2, 1, -10, 8];

// // ... your code to sort it in decreasing order

// alert( arr ); // 8, 5, 2, 1, -10

function sortDesc(arr){
    return arr.sort((a, b) => b - a)
}
console.log(sortDesc([5, 2, 1, -10, 8]))


// ----------------------------------------------------------------
// Copy and sort array
// importance: 5

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)
function copySorted(arr){
    return arr.slice().sort()
}
let arr1 = ["HTML", "JavaScript", "CSS"]
console.log(copySorted(arr1))
console.log(arr1)


// ----------------------------------------------------------------
// Create an extendable calculator
// importance: 5

// Create a constructor function Calculator that creates “extendable” calculator objects.

// The task consists of two parts.

//     First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

//     Usage example:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10

// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:

//     let powerCalc = new Calculator;
//     powerCalc.addMethod("*", (a, b) => a * b);
//     powerCalc.addMethod("/", (a, b) => a / b);
//     powerCalc.addMethod("**", (a, b) => a ** b);

//     let result = powerCalc.calculate("2 ** 3");
//     alert( result ); // 8

//     No parentheses or complex expressions in this task.
//     The numbers and the operator are delimited with exactly one space.
//     There may be error handling if you’d like to add it.
function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    }

    this.calculate = function(str){
        let arr = str.split(" "),
            a = +arr[0],
            op = arr[1],
            b = +arr[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)){
            return NaN
        }
        return this.methods[op](a, b);
    }

    this.addMethod = function(name, fun){
        this.methods[name] = fun
    }
}

let calc = new Calculator
calc.addMethod("*", (a, b) => a * b)

console.log(calc.calculate("1 + 1"))
console.log(calc.calculate("1 - 1"))
console.log(calc.calculate("1 * 3"))


// ----------------------------------------------------------------
// Map to names
// importance: 5

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(e => e.name)

console.log( names ); // John, Pete, Mary


// ----------------------------------------------------------------
// Map to objects
// importance: 5

// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

john = { name: "John", surname: "Smith", id: 1 };
pete = { name: "Pete", surname: "Hunt", id: 2 };
mary = { name: "Mary", surname: "Key", id: 3 };

users = [ john, pete, mary ];

let usersMapped = users.map(e => ({ 
     fullName: e.name + " " + e.surname, 
     id: e.id 
}))

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */
console.log( usersMapped )
console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith


// ----------------------------------------------------------------
// Sort users by age
// importance: 5

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 28 };

arr = [ pete, john, mary ];

function sortByAge(arr){
    return arr.sort((a, b) => a.age - b.age)
}

console.log(sortByAge(arr));

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete


// ----------------------------------------------------------------
// Shuffle an array
// importance: 3

// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

arr = [1, 2, 3];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

console.log(shuffle(arr))
console.log(shuffle(arr))
console.log(shuffle(arr))

// Fisher-Yates shuffle bullshit
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}

console.log(shuffle(arr))
console.log(shuffle(arr))
console.log(shuffle(arr))


// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.


// ----------------------------------------------------------------
// Get average age
// importance: 4

// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:

john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 29 };

arr = [ john, pete, mary ];

function getAverageAge(arr){
    return arr.reduce((acc, cur) => acc + cur.age, 0) / arr.length
}

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


// ----------------------------------------------------------------
// Filter unique array members
// importance: 4

// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

function unique(arr) {
  return [...new Set(arr)]
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O


// ----------------------------------------------------------------
// Create keyed object from array
// importance: 4

// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

// For example:

function groupById(arr){
    let result = {}

    for(let user of arr){
        result[user.id] = user
    }
    return result
}

users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

console.log(usersById)
// /*
// // after the call we should have:

// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
// */

// Such function is really handy when working with server data.

// In this task we assume that id is unique. There may be no two array items with the same id.

// Please use array .reduce method in the solution.
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}