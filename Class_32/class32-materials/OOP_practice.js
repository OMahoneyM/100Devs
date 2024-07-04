class Car {
    constructor(make, model, year, price, type, fuelLevel, fuelCapcity){
        this._make = make
        this._model = model
        this._year = year
        this._price = price
        this._type = type
        this._fuelLevel = fuelLevel
        this._fuelCapacity = fuelCapcity
    }

    get make(){
        return this._make;
    }

    get model(){
        return this._model;
    }

    get year(){
        return this._year;
    }
    get type(){
        return this._type;
    }

    get fuelCapcity(){
        return `${this._fuelCapacity} Gallons`;
    }

    get fuelLevel(){
        return `${this._fuelLevel} Gallons`;
    }

    get price(){
        return this._price;
    }

    set price(value){
        if (typeof value === number) {
            this._price = value;
        } else {
            return 'User supplied price should be a number.';
        }
    }

    start(){
        console.log(`You turn the key and the ${this._make} ${this._model} sparks to life.`)
    }

    stop(){
        console.log(`The ${this._year} ${this._make} ${this._model} falls silent as you turn it off.`)  
    }

    drive(){
        console.log(`The ${this._make} ${this._model} jumps forward as you kick it into drive.`)
    }

    checkFuelLevel(){
        console.log(`The ${this._make} ${this._model} is ${this._fuelLevel}/${this._fuelCapacity} Gallons full.`)
    }

    refuel(int){
        if (typeof int === 'number' && int <= this._fuelCapacity){
            this._fuelLevel = int
        } else {
            console.log(`${int} is not a number or is larger than the ${this._fuelCapacity} gallon capicity.`)
        }
    }
}

let bmw325 = new Car('BMW', '325', 2004, '$4,000', 'gasoline', 8, 16)

console.log(bmw325.fuelLevel)
bmw325.start()
bmw325.stop()
bmw325.drive()
bmw325.checkFuelLevel()
bmw325.refuel(10)
bmw325.checkFuelLevel()
bmw325.refuel(17)

class EV extends Car{
    constructor(make, model, year, price, type, fuelLevel, fuelCapcity){
        super(make, model, year, price, type, fuelLevel, fuelCapcity)
    }

    get fuelCapcity(){
        return `${this._fuelCapacity}%`;
    }

    get fuelLevel(){
        return `${this._fuelLevel}% charged`;
    }

    checkFuelLevel(){
        console.log(`The ${this._make} ${this._model} is ${this._fuelLevel}/${this._fuelCapacity}% charged.`)
    }

    refuel(int){
        if (typeof int === 'number' && int <= this._fuelCapacity){
            this._fuelLevel = int
        } else {
            console.log(`${int} is not a number or is greater than ${this._fuelCapacity}% capicity.`)
        }
    }
}

let polestar2 = new EV('Polestar', '2', 2020, '$40,000', 'electric', 60, 100)

console.log(polestar2.fuelLevel)
polestar2.start()
polestar2.stop()
polestar2.drive()
polestar2.checkFuelLevel()
polestar2.refuel(90)
polestar2.checkFuelLevel()
polestar2.refuel(117)

class SUV extends Car{
    constructor(make, model, year, price, type, fuelLevel, fuelCapcity){
        super(make, model, year, price, type, fuelLevel, fuelCapcity)
    }

    engage4WD(){
        console.log(`The ${this._make} ${this._model} engages four-wheel drive.`)
    }
}

let toyotaLandCruiser = new SUV('Toyota', 'Land Cruiser', 1989, '$10,000', 'gasoline', 5, 19)

console.log(toyotaLandCruiser.fuelLevel)
toyotaLandCruiser.start()
toyotaLandCruiser.stop()
toyotaLandCruiser.drive()
toyotaLandCruiser.checkFuelLevel()
toyotaLandCruiser.refuel(17)
toyotaLandCruiser.checkFuelLevel()
toyotaLandCruiser.refuel(20)
toyotaLandCruiser.engage4WD()

let fleet = [bmw325, polestar2, toyotaLandCruiser]

for (let car of fleet){
    car.checkFuelLevel()
}

const {model} = bmw325

console.log(model)