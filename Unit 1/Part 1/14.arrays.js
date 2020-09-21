let a = ["apple", "house", "dog"];
console.log(a.toString());
console.log(a.length);

a[6] = "car";
console.log(a.toString());
console.log(a.length);

a.length = 2;
console.log(a.toString());
console.log(a.length);

let a2 = ["Peter", "Allison", "Jane", "George"];
for(let i = 0; i < a2.length; i++) {
    console.log(`Position ${i}: ${a2[i]}`);
}

for(let i in a2) {
    console.log(`Position ${i}: ${a2[i]}`);
}

for(let name of a2) {
    console.log(name);
}

console.log("************* .forEach ************");
a2.forEach((name, i) => console.log(`${i}: ${name}`));
