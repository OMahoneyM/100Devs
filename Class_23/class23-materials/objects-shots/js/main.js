//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', fetchCocktail)

function getURL(){
    let userInput = document.querySelector('input').value;
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

    if (userInput.includes(' ')){
        url = url + userInput.replaceAll(' ', '%20%')
    } else {
        url = url + userInput
    }
    return url
}

function fetchCocktail(){
    let url = getURL()
    console.log(url)
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('img').src = data[0].strDrinkThumb
      document.querySelector('img').alt = `image of ${data[0].strDrink}`
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
