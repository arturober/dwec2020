'use strict';

// function sayHello(name = "Anonymous", age = 99) {
//     console.log("My name is " + name + ". I'm " + age + " years old");
// }
function sayHello(name, age) {
    let name2 = name || "Anonymous";
    let age2 = age || 99;
    console.log("My name is " + name2 + ". I'm " + age2 + " years old");
}

sayHello("Peter", 40);
sayHello("John", 45, true, "house", [3,4,5]);
sayHello("Mary");
sayHello();
sayHello(undefined, 18);


