"use strict";
// convert to more or less specific
let a = 'hey';
let b = a; // less specific
let c = a; // more specific
// using assertion (just like 'Type Casting')
let d = 'world';
let e = 'world';
// e = true
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
// using assertion (just like 'Type Casting')
let myStringResult = addOrConcat(5, 5, 'concat');
// Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as String
10;
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
nextImg.src;
