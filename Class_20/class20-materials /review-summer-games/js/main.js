//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
let nums = [1,2,3,4,5]

function arrayMulti(arr){
    let result = 1
    arr.forEach(x => result *= x)
    alert(result)
}
arrayMulti(nums)