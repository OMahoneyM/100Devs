//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function Fighter(name, health, specialMove, country){
    this.name = name
    this.health = health
    this.specialMove = specialMove
    this.country = country

    this.intro = function(){
        console.log(`${this.name} is ready to rumble!`)
    }

    this.punch = function(){
        console.log('Punch!')
    }
    
    this.useSpecial = function(){
        console.log(`Feel my ${this.specialMove}!!`)
    }
}

let blanka = new Fighter('Blanka', 100, 'Electric Thunder', 'Brazil')