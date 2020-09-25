class Person {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    toString() {
        return `${this.name} (${this.age}) -> ${this.salary}`;
    }
}

let people = new Map();
people.set("43534634Y", new Person("Peter", 48, 30000));
people.set("75675854U", new Person("John", 25, 18000));
people.set("34526726Y", new Person("Mary", 60, 55000));

console.log(people);
console.log(people.get("75675854U"));
console.log(people.get("75675854U").salary);
console.log(people.has("34526726Y")); // true
console.log(people.has("25346346T")); // false
// people.delete("43534634Y");
// console.log(people);

// for(let entry of people) {
//     console.log(`${entry[0]}: ${entry[1]}`);
// }

// for(let [dni, person] of people) {
//     console.log(`${dni}: ${person}`);
// }

// people.forEach((person, dni) => console.log(`${dni}: ${person}`));
Array.from(people.keys()).forEach(dni => console.log(`${dni}: ${people.get(dni)}`));
