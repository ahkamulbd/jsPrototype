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

function Person(name, age){
    let person= {};

    person.name = name;
    person.age = age;

    person.eat = function(){
        console.log(`Person is eating`);
    }
    person.sleep = function(){
        console.log(`Person is sleeping`);
    }

    return person;
}

let sakib = new Person('Sakib', 35);
let tamim = new Person('Tamim', 36);

console.log(sakib);
console.log(tamim)