// Factory Function
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw')
        }
    };
}

const circle = createCircle(1);


// Constructor Function
function Circle(radius){
    this.radius = radius;

    // These are private properties and methods
    let defaultLocation = {x: 0, y: 0};

    let computeOptimumLocation = function(factor){
        // ...
    }

    this.draw = function(){

        computeOptimumLocation(0.1)

        console.log('Circle draw')
    };
    // access a pirvate property as read only
    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation;
        },
        // define a setter if you want to be able to set a value for a private property
        set: function(value){
            if (!value.x || !value.y)
                throw new Error('Invalid location.');

            defaultLocation = value
        }
    });
}

let another = new Circle(1);
// adding properties
circle.location = {x: 1}
circle['location'] = {y: 1}
// delete property
delete circle.location
// enumerate all members in an object use for in loop
for (let key in circle){
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]); 
}
// get all keys using object.keys()
const keys = Object.keys(circle);
console.log(keys);
// check for the existence of a property or method in an object, use the in operator
if('radius' in circle)
    console.log('Circle has a radius.')



// Exercise
// -----------------------------------------------------
// Create a Stopwatch object and run it 


function Stopwatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if (running)
            throw new Error('Stopwatch has already started');

        running = true;

        startTime = new Date();

    };

    this.stop = function(){
        if (!running)
            throw new Error('Stopwatch is already stopped.')

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;

        duration += seconds;
    };

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;

    };

    Object.defineProperty(this, 'duration', {
        get: function() {return duration}
    });
}

const sw = new Stopwatch()