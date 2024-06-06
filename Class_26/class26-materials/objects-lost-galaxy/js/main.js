//Create a pizza object that has four properties and three methods

let pizza = {}

pizza.size = 'large'
pizza.style = 'New York'
pizza.toppings = ['cheese', 'proscuitto', 'arugula', 'onion']
pizza.sauce = 'marinara'

pizza.smell = function(){
    console.log('smells delicious')
}

pizza.cheeseStretch = function(){
    console.log('Look at that cheese stretch!')
}

pizza.deliveryTime = function(){
    console.log('30 mins or less')
}