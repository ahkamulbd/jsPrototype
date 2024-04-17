// function test() {

// }
// console.dir(test);

// function Person(name, age) {
//     let person = Object.create(Person.prototype);

//     person.name = name;
//     person.age = age;

//     return person;
// }

// Person.prototype = {
//     eat() {
//         console.log(`Person is eating`);
//     },
//     sleep() {
//         console.log(`Person is sleeping`);
//     },
//     play() {
//         console.log(`Person is playing`);
//     }
// }
// const sakib = Person('Sakib', 35);
// const tamim = Person('Tamim', 36);

// console.log(tamim);
// console.log(tamim.play);

/** With new Keyword: */
function Person(name, age) {
    // let person = Object.create(Person.prototype);
    // let this = Object.create(Person.prototype);

    this.name = name;
    this.age = age;

    // return person;
}

Person.prototype = {
    eat() {
        console.log(`Person is eating`);
    },
    sleep() {
        console.log(`Person is sleeping`);
    },
    play() {
        console.log(`Person is playing`);
    }
}
const sakib = new Person('Sakib', 35);
console.log(sakib.play);
const tamim = Person('Tamim', 36);