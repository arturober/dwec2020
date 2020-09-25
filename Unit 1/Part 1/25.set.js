let names = new Set();
names.add("Peter");
names.add("Josh");
names.add("Mary");
names.add("Lucas");
names.add("Marty");
names.add("Tom");
names.add("Jerry");
names.add("Peter");
names.add("Peter");
names.add("Peter");
names.add("Peter");
names.add("Peter");

console.log(names);
console.log(names.size);
console.log(names.has("Peter"));

// for(let name of names) {
//     console.log(name);
// }

names.forEach(n => console.log(n));

let namesArray = Array.from(names);
console.log(namesArray);

let n = [2, 6, 3, 4, 5, 2, 2, 2, 2];
let n2 = new Set(n);
console.log(n2);
