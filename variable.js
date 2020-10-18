// 1. Use strict
// added in ES 5
// use this for Valina Javascript

'use strict';

// 2. Variable
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'Hello';
    console.log(name);
}
    console.log(name);
    console.log(globalName);
    // var (don't ever use this!)
    // var hoisting (move declaration from bottom to top)
    // has no block scope
{
    age = 4;
    var  age;
}
console.log(age);