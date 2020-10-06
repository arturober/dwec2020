class Persona {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this._nombre} y tengo ${this._edad} años`);
    }

    static sayHello() {
        console.log("HELLO");
    }

    get nombre() {
        return this._nombre.toLocaleUpperCase();
    }

    set nombre(_nombre) {
        this._nombre = "-"+_nombre+"-";
    }



    toString() {
        return this._edad.toString();
    }
}

let p = new Persona("Pedro", 25);
let p2 = new Persona("Ana", 16);
p.saludar();
Persona.sayHello();
console.log(p.nombre);
p.nombre = "Juan";
console.log(p.nombre);

console.log(p - 10); // 15
console.log(p < p2); // false

let people = [
    p,
    p2,
    new Persona("John", 59),
    new Persona("Elisa", 47)
];

people.sort((p1, p2) => p1 - p2);
console.log(people);

let [,,{_nombre: name}] = people;
console.log(name); // Elisa
