//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeSFCharacter(name, punch, kick, taunt){
    this.name = name
    this.punch = punch
    this.kick = kick
    this.taunt = taunt
    this.specialMove = function(){
        alert('shoyuken!')
    }
    this.jump = function(){
        console.log('jump')
    }
    this.dodge = function(){
        console.log('dodge')
    }

}