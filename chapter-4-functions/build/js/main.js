"use strict";
// Literal Types
let myName;
let userName;
userName = "Cherry";
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello from TypeScript');
logMsg(add(5, 7));
const subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(10, 2));
// Rest Parameters 
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard 
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// use of the never type 
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
logMsg(numberOrString(7));
