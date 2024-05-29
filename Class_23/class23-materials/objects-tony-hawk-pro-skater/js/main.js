//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods

function THPSCharacter(style, name, stance, homeTown) {
    this.style = style
    this.name = name
    this.stance = stance
    this.homeTown = homeTown
    this.sayStyle = function(){
        console.log(`I'm a ${this.style} skater`)
    }
    this.grind = function(){
        console.log('Scratch those pipes')
    }
    this.kickflip = function(){
        console.log('Kickflip!!')
    }
}

let nani = new THPSCharacter('street', 'Nani', 'goofy', 'Pasadena')