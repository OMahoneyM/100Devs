//Create a stopwatch object that has four properties and three methods
let stopwatch = {}

stopwatch.color = 'black'
stopwatch.shape = 'round'
stopwatch.time = 12
stopwatch.hasLanyard = true

stopwatch.startTime = function(){
    console.log('Starting')
}
stopwatch.stopTime = function(){
    console.log('Stopping')
}
stopwatch.beep = function(){
    console.log('chirp')
}

function isIsogram(str){
    let arr = str.toLowerCase().split('')
    return !arr.some((v, i, a) => a.lastIndexOf(v) !== i)
  }

  console.log(isIsogram('teNt'))

function isIsogram(str){
    return new Set(str.toUpperCase()).size === str.length;
}

function sum (numbers) {
    let result = 0
    for(let i = 0; i < numbers.length; i++){
        result += numbers[i]
    }
    return result
};

function sum(numbers){
    return numbers.reduce((a, b) => a + b, 0)
}

console.log(sum([]))
console.log(sum([1, 5.2, 4, 0, -1]))

function addBinary(a,b){
    return (a + b).toString(2)
}

  console.log(addBinary(1, 2))

function friend(friends){
    return friends.filter(item => item.length === 4)
}

console.log(friend(["Ryan", "Kieran", "Mark"]))
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))

let arr = ['NYC', 'DC', 'ATL', 'LA']
for(city of arr){
    console.log(city)
}
