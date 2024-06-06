//Create a constructor with 4 properties and 3 methods
function Pizza(size, style, toppings, sauce, ){
    this.size = size
    this.style = style
    this.toppings = toppings
    this.sauce = sauce

    this.smell = function(){
        console.log('smells delicious')
    }
    
    this.cheeseStretch = function(){
        console.log('Look at that cheese stretch!')
    }
    
    this.deliveryTime = function(){
        console.log('30 mins or less')
    }

}

let pizza = new Pizza('large', 'New York', ['proscuitto', 'arugula', 'onions'], 'marinara')