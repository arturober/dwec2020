import { IPerson } from './iperson';
import { IProduct } from './iproduct';
import { ISayHello } from './isayhello';
import * as $ from 'jquery';

class Person implements ISayHello {
    constructor(private name: string, private age: number) {}

    sayHello(): void {
        console.log('Hello!');
    }

    toString(): string {
        return `${this.name}, ${this.age}`;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}

let p: Person;
p = new Person('Peter', 45);

function showPerson(person: Person): void {
    person.getAge();
}

const prod: IProduct = {
    image: 'asdf',
    description: 'asdf',
    price: 34,
    id: 23
};

console.log(prod);


let input1 = document.getElementById('input1') as HTMLInputElement;
input1.value = 'Hello';

let form = document.getElementById('form') as HTMLFormElement;
let price = +(form.price as HTMLInputElement).value;

$.get({
    url: 'asdfsadf',
    
})