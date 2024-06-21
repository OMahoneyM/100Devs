//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this._name} makes a sound`)
    }
}

class Bat extends Animal{
    constructor(name, species){
        super(name)
        this._species = species
    }

    get species(){
        return this._species
    }

    speak(){
        super.speak()
        console.log(`${this._name} screeches`)
    }
}

let lazlo = new Bat('Lazlo', 'vampire')

lazlo.speak()
console.log(lazlo.name)
console.log(lazlo.species)