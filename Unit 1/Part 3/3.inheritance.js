class Vehicle {
    constructor(name, plate) {
        this.name = name;
        this.plate = plate;
    }

    showInfo() {
        console.log(`${this.name} (${this.plate})`);
    }
}

class Car extends Vehicle {
    constructor(name, plate, hp) {
        super(name, plate);
        this.hp = hp;
    }

    showInfo() {
        super.showInfo();
        console.log("Horse power: " + this.hp);
    }

    toString() {
        return `${this.name} - ${this.plate}: ${this.hp}HP`;
    }
}

let car = new Car("Seat panda", "3453GTH", 35);
console.log(car);
car.showInfo();
console.log("Car info => " + car);
