"use strict";

let p1 = {
    name: "Peter",
    age: 34
};

let p2 = {...p1}; // Object.assign({}, p1)
p2.name = "John";
console.log(p1.name);

let user = {
    login: "user",
    password: "1234"
}

let userLogin = {...p1, ...user, admin: false};
console.log(userLogin);

let userLogin2 = Object.assign({}, p1, user, {admin: false});
console.log(userLogin2);
