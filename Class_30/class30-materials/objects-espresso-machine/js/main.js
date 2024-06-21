//Create an espresso machine class that makes machines with 4 properties and 3 methods

class EspressoMachine{
    constructor(cups, brand, color){
        this.cups = cups
        this.brand = brand
        this.color = color
        this._power = false
    }
    brew(){
        console.log(`Brewing ${this.cups} cups of espresso`)
    }
    steam(){
        console.log('Steaming the milk')
    }
    get power(){
        if(typeof this._power === 'boolean'){
            this._power ? console.log('Machine is on.') : console.log('Machine is off.')
        } else{
            console.log('The machine is on the fritz.')
        }
    }
    set power(bool){
        if(typeof bool === 'boolean'){
            this._power = bool
        } else {
            console.log('Please enter a Boolean')
        }
    }
}

let delonghi = new EspressoMachine(4, 'Delonghi', 'silver')

delonghi.brew()
delonghi.steam()
delonghi.power
delonghi.power = 'on'
delonghi.power = true
delonghi.power
