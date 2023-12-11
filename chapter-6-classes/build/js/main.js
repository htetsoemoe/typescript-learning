"use strict";
/* Class in TypeScript */
class Coder {
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const koHtet = new Coder('ko', 'Rock', 33);
console.log(koHtet.getAge());
// console.log(koHtet.age); // it will print in console because it is a valid js code
// console.log(koHtet.lang);
/* Inheritance in TypeScript */
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age); // call super class constructor
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const koko = new WebDev('DELL', 'koko', 'rock', 29);
console.log(koko.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name,
            this.instrument = instrument;
    }
    // Override the method
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const James = new Guitarist('James', 'Guitar');
console.log(James.play('strums'));
/* Static Variable in TypeScript */
class Peeps {
    // static variable can directly access from static method and it's class
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Cherry = new Peeps('Cherry');
const Amy = new Peeps('Amy');
console.log(Peeps.getCount());
/* Getter & Setter in TypeScript */
class Bands {
    constructor() {
        this.dataList = [];
    }
    // getter
    get data() {
        return this.dataList;
    }
    // setter
    set data(value) {
        if (Array.isArray(value) && value.every(element => typeof element === 'string')) {
            this.dataList = value;
            return;
        }
        else {
            throw new Error('Param is not an array of string');
        }
    }
}
const myBands = new Bands();
myBands.data = ['Iron Cross', 'Emperor']; // using setter
console.log(myBands.data); // using getter
myBands.data = [...myBands.data, 'SIR'];
console.log(myBands.data);
// myBands.data = ['Velocity', 888] // will get error
