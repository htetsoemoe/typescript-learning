/* Class in TypeScript */
class Coder {
    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'TypeScript'
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }
}

const koHtet = new Coder('ko', 'Rock', 33)
console.log(koHtet.getAge())
// console.log(koHtet.age); // it will print in console because it is a valid js code
// console.log(koHtet.lang);


/* Inheritance in TypeScript */
class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age) // call super class constructor
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const koko = new WebDev('DELL', 'koko', 'rock', 29)
console.log(koko.getLang());


/* Interface in TypeScript */
interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    // Override the properties
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name,
        this.instrument = instrument
    }

    // Override the method
    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const James = new Guitarist('James', 'Guitar')
console.log(James.play('strums'));


/* Static Variable in TypeScript */
class Peeps {
    static count: number = 0

    // static variable can directly access from static method and it's class
    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Cherry = new Peeps('Cherry')
const Amy = new Peeps('Amy')
console.log(Peeps.getCount())


/* Getter & Setter in TypeScript */
class Bands {
    private dataList: string[]

    constructor() {
        this.dataList = []
    }

    // getter
    public get data(): string[] {
        return this.dataList
    }

    // setter
    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(element => typeof element === 'string')) {
            this.dataList = value
            return
        } else {
            throw new Error('Param is not an array of string')
        }
    }
}

const myBands = new Bands()
myBands.data = ['Iron Cross', 'Emperor']    // using setter
console.log(myBands.data)   // using getter

myBands.data = [...myBands.data, 'SIR']
console.log(myBands.data);
// myBands.data = ['Velocity', 888] // will get error