// let person= {};

// person.name = 'Sappo';
// person.age = 7;

// person.eat = function(){
//     console.log(`Person is eating`);
// }
// person.sleep = function(){
//     console.log(`Person is sleeping`);
// }

// console.log(person);

// const personMethod = {
//     eat(){
//         console.log(`Person is eating`);
//     },
//     sleep(){
//         console.log(`Person is sleeping`);
//     },
//     play(){
//         console.log(`Person is playing`);
//     }
// }

// function Person(name, age){
//     let person= {};

//     person.name = name;
//     person.age = age;

//     person.eat = personMethod.eat;
//     person.sleep = personMethod.sleep;
//     person.play = personMethod.play;

//     return person;
// }

// let sakib = new Person('Sakib', 35);
// let tamim = new Person('Tamim', 36);

// console.log(sakib);
// console.log(tamim)

const captain = {
    name: 'Mashrafi',
    age: 38,
    country: 'Bangladesh'
}

const player = Object.create(captain);

console.log(player);
console.log(player.name);