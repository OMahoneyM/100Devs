//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getCocktail)

function getCocktail (){
    let cocktail = document.querySelector('input').value

    if (cocktail.includes(" ")){
        cocktail.replace(" ", "%20%")
    }

    let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktail

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data.drinks[0])
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('img').alt = 'image of a cocktail'
        document.querySelector('p').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
