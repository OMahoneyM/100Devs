//https://www.youtube.com/watch?v=vn3tm0quoqE

//Example 1
// L1
console.log('Synchronous 1 Ex1');

// L2
setTimeout(_=> console.log('Timeout 2 Ex1'), 0);

// L3
Promise.resolve().then(_ => console.log('Promise 3 Ex1'));

// L4
console.log('Synchronous 4 Ex1')


//Example 2
// import fetch from 'node-fetch';

const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

promise
    .then(res => res.json())
    .then(user => console.log('!o! Ex2', user.title))
    .catch(err => console.error('oh no', err));

console.log('Synchronous Ex2')


// Example 3
const tick = Date.now();
const log = v => console.log(`${v} \n Elapsed: ${Date.now() - tick} ms`)

const codeBlocker = () => {
    // let i = 0;
    // while(i < 1000000000) {i++;}

    // return 'Billion loops done!'

    // return new Promise((resolve, reject) => {
    //     let i = 0;
    //     while(i < 1000000000) {i++;}

    //     resolve('Billion loops done!');
    // })

    return Promise.resolve().then(v => {
        let i = 0;
        while(i < 1000000000) {i++;}

        return 'Billion loops done!';
    })

}

log('Synchronous 1 Ex3');

//log(codeBlocker());
codeBlocker().then(log);

log('Synchronous 2 Ex3');


// Example 4
const getFruit = async(name) => {
    const fruits = {
        pineapple: 'pineapple',
        peach: 'peach',
        strawberry: 'strawberry'
    }

    // await delay(1000);

    return fruits[name];
}

getFruit('peach').then(console.log)

const makeSmoothie = async() => {
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');
    const smoothie = await Promise.all([a, b]);
    
    return smoothie;
}

makeSmoothie().then(log)


// Example 5
const badSmoothie = async() => {
    try{
        const a = getFruit('pineapple');
        const b = getFruit('strawberry');
        const smoothie = await Promise.all([a, b]);
        
        throw 'broken!'

        return smoothie;
    
    } catch(err) {
        console.log(err)
        // return 'We are going to be fine...'
        throw "It's broken!"
    }
}

badSmoothie()
    .then(val => console.log({ val }))
    .catch(err => console.log({ err }))


// Example 6
const fruits =['peach', 'pineapple', 'strawberry'];
// const smoothie = fruits.map(async v => {
//     const emoji = await getFruit(v)
//     log(emoji)
//     return emoji
// });
const smoothie = fruits.map(v => getFruit(v));

const fruitLoop = async() => {
    for await (const emoji of smoothie) {
        log(`Ex6: ${emoji}`)
    }
}

fruitLoop()


// Example 7
const fruitPolice = async () => {
    if (await getFruit('peach') === 'peach') {
        console.log('Ex7: looks peachy!')
    }
}

fruitPolice()