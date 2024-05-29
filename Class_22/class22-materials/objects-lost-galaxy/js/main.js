//Create a mouse object that has four properties and three methods
let mouse = {
    color: 'grey',
    size: 'small',
    tail: true,
    blind: false,
    sniff: function(){
        console.log('sniff sniff')
    },
    nibble: function(){
        console.log('nom nom')
    },
    runAway: function(){
        console.log('run run run')
    }
}

console.log(mouse)