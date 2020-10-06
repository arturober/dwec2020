"use strict";

let p = {
    name: "Peter",
    age: 34,
    address: {
        street: "Nowhere Street",
        number: 25,
        city: "Oldtown"
    }
}

let {name, age, dni = "0000000A"} = p;
console.log(name);
console.log(age);
console.log(dni);

let {name: v1, age: v2, dni: v3 = "0000000A"} = p;
console.log(v1);
console.log(v2);
console.log(v3);

let {address: {street}} = p;
console.log(street);

function showInfo({age, name, address: {street}}) {
    console.log(`${name} is ${age} years old, and lives in: ${street}`);
}

showInfo(p);


