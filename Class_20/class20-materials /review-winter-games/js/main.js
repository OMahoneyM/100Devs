//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
let nums = [1,2,3,4,5,6,7,8,9]
function evensOnly(arr){
    let evenArray = []
    arr.forEach(element => {
        if(element % 2 == 0){
            evenArray.push(element)
        }
    })
    return evenArray
}

console.log(evensOnly(nums))

let evensOnlyMap = arr => arr.map(element => element % 2 == 0)

console.log(evensOnly(nums))