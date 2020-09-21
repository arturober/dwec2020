"use strict";

let a = ["Peter", "Allison", "Jane", "George"];
console.log(a.toString());
a.unshift("Nobody");
console.log(a.toString());
a.push("Somebody");
console.log(a.toString());
a.shift();
a.pop();
console.log(a.join(", "));

let a2 = a.slice(0,2);
console.log(a2.toString());

console.log(a.join(", "));
let deleted = a.splice(1, 1, "Anne", "Martin");
console.log(a.join(", "));
console.log("Deleted: " + deleted);


