//Create an array of movies with at least three movies.
let movieArray = ['The Godfather', 'Godfather II', 'Godfather III']
console.log(movieArray)
//Using the array from above, store the first movie in a variable
let firstMovie = movieArray[0]
console.log(firstMovie)
//Get the length of the original array and store it in a new variable
let movieArraylength = movieArray.length
console.log(movieArraylength)
//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
let lastMovie = movieArray[movieArraylength - 1]
console.log(lastMovie)