export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return `${this.name} - ${this.age}`;
    }

    sayHello() {
        console.log('Hello!');
    }
}