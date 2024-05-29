// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood
favFood = 'pizza'
alert(favFood)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = 'taco'
alert(str[1])
// or
alert(str.charAt(1))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divAndMultiThree(x, y, z){
    alert((x / y) * z)
}
divAndMultiThree(10, 5, 3)
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(x){
    console.log(Math.cbrt(x).toFixed(4))
}
cubeRoot(9)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function summerAlert(month){
    switch (month.toLowerCase()){
        case 'june':
        case 'july':
        case 'august':
            alert('YAY')
            break;
        default:
            alert('Booo')
    }
}
summerAlert('July')
summerAlert('December')

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipFive(x){
    for(let i = 1; i <= x; i++){
        if(i % 5 != 0){
            console.log(i)
        }
    }
}
skipFive(12)