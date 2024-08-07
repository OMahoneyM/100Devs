// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
class Contractor{
    constructor(name, role){
        this._name = name
        this._role = role
    }

    get name(){
        return this._name;
    }

    get role(){
        return this._role;
    }

    sayHey(){
        console.log(`Hi! My name is ${this._name} and I am a ${this._role} developer.`)
    }
}

class Frontend extends Contractor{
    constructor(name, role, tech){
        super(name, role)
        this._tech = tech
    }

    get tech(){
        return this._tech
    }

    sayHey(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    }
}

class Backend extends Contractor{
    constructor(name, role, tech){
        super(name, role)
        this._tech = tech
    }

    get tech(){
        return this._tech
    }

    sayHey(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    }
}

let terry = new Contractor('Terry','Front-end')
let dennis = new Frontend('Dennis','Front-end','React')
let cyrus = new Backend('Cyrus','Back-end','Node')

let agency = [terry, dennis, cyrus]

for(let person of agency) {
    person.sayHey()
}


// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }
