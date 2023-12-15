// higher order functions

function morning(name){
    return `Good Morning ${name.toUpperCase()}`
}

function afternoon(name){
    return `Good Afternoon ${name.repeat(3)}`;
}

function greet(name, cb){
    const myName = 'krishna';
    console.log(`${cb(name)}, my name is ${myName}.`);
}

greet('radha', morning);
greet('seetha', morning);
greet('sathya ', afternoon);

