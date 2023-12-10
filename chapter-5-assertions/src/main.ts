type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific
let a: One = 'hey'
let b = a as Two // less specific
let c = a as Three // more specific

// using assertion (just like 'Type Casting')
let d = <One>'world'
let e = <string | number>'world'
// e = true

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}

// using assertion (just like 'Type Casting')
let myStringResult: string = addOrConcat(5, 5, 'concat') as string

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number

// 10 as String
(10 as unknown) as string

// The DOM
const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img')

img.src
myImg.src
nextImg.src