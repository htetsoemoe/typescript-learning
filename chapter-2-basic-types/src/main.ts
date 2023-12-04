let myName: string
let meaningOfLife: number
let isLoading: boolean
let album: any  // 'any' can be 'string', 'number', 'boolean', 'array', 'object'

myName = 'John Doe'
meaningOfLife = 32
isLoading = true
album = {
    "name": "Metallica",
    "album": "black",
    "year": 1999
}

const sum = (a: number, b: number) => {
    return a + b
}

// Union Type
let postId: string | number  
let address: null | string | object  
let isActive: number | boolean

// RegExp Type
let re: RegExp = /\w+/g
