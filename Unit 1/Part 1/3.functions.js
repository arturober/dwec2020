'use strict';

function random(num) {
    if(num < 10) {
        return num * 2;
    }
}

console.log(random(3)); // 6
console.log(random(26)); // undefined

function suma(n1, n2) {
    return n1 + n2;
}
let result = suma(6, 8);
console.log(result); // 14

setTimeout(function() {
    console.log("Hello world!");
}, 3000);


