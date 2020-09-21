'use strict'

let v = 10;

function foo() {
    let v = 99;
    console.log("Inside function foo: " + v);
}

foo();
console.log("Outside function: " + v);
