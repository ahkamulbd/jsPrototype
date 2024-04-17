class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`Person is playing`);
    }
    sleep() {
        console.log(`Person is sleeping`);
    }
    play() {
        console.log(`Person is playing`);
    }
}

const sakib = new Person('Sakib', 35);
// console.log(sakib.play);
const tamim = new Person('Tamim', 36);
// console.log(tamim);
// console.log(tamim.play);

const array1 = new Array(2, 3, 4, 8, 11, 2, 3);
const array2 = new Array([2, 3, 4, 8, 11, 2, 3]);
console.log(array1);
console.log(array2);
