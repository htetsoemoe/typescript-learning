// Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray // using 'Type Aliases'
}

// 'Type Aliases' cannot use in 'interface' type.

type UserId = stringOrNumber

// Literal Types
let myName: 'ko'

let userName: 'John' | 'Doe' | 'Cherry'
userName = "Cherry"

// functions
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
    
}

logMsg('Hello from TypeScript')
logMsg(add(5, 7))

const subtract = function (c: number, d: number): number {
    return c - d
}

// Function Type or Interface
type mathFunction = (a: number, b: number) => number

let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg(multiply(10, 2))

// Rest Parameters 
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10, 2, 3))

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

// custom type guard 
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false
}

// use of the never type 
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError('This should never happen!')
}

logMsg(numberOrString(7))