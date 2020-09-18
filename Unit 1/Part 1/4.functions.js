'use strict';

function sayHello(name = "Anonymous", age = 99) {
    console.log("My name is " + name + ". I'm " + age + " years old");
}

sayHello("Peter", 40);
sayHello("John", 45, true, "house", [3,4,5]);
sayHello("Mary");
sayHello();
sayHello(undefined, 18);


