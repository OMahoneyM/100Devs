// Object methods, “this”

// ----------------------------------------------------------------
// Using "this" in object literal

// importance: 5

// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?
// - An error because rules that set this do not look at object definition. Only the moment of call matters.

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?


// ----------------------------------------------------------------
// Create a calculator

// importance: 5

// Create an object calculator with three methods:

//     read() prompts for two values and saves them as object properties with names a and b respectively.
//     sum() returns the sum of saved values.
//     mul() multiplies saved values and returns the result.

let calculator = {
  read(a, b){
    this.a = +prompt('a?', 0)
    this.b = +prompt('b?', 0)
  },

  sum(){
    return this.a + this.b
  },

  mull(){
    return this.a * this.b
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// ----------------------------------------------------------------
// Chaining

// importance: 2

// There’s a ladder object that allows you to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this; // added to chainable
  },
  down() {
    this.step--;
    return this; // added to make chainable
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this; // added to make chainable
  }
};

// Now, if we need to make several calls in sequence, we can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

// Modify the code of up, down, and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

// Such an approach is widely used across JavaScript libraries.