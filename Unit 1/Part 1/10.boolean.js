'use strict';

console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(!![]); // false
console.log(!!""); // false
console.log(!!"Hello"); // true 
console.log(!!undefined); // false 
console.log(!!null); // false

let num = 5;
if(num) {
    console.log(num);
}

function sayHello(name) {
    if(name) {
        console.log("Hello " + name);
    }
}

sayHello("Peter");
sayHello("");
sayHello();
