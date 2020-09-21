'use strict';

console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE*2);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_VALUE/2);
console.log(Number.POSITIVE_INFINITY / Number.POSITIVE_INFINITY); // NaN

// let age = +prompt("Tell me your age: ");
// if(!Number.isNaN(age)) {
//     console.log("In 20 years you'll be " + (20 + age));
// } else {
//     console.error("Age must be a number");
// }

function sum(n1, n2) {
    if(typeof n1 !== "number" || typeof n2 !== "number") {
        console.error("Parameters must be numbers");
        return 0;
    } else {
        return n1 + n2;
    }
}

console.log(sum(2,4));
console.log(sum(2,"Sam"));

