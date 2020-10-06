"use strict";

let obj = new Object();
obj.nombre = "Peter";
obj.edad = 41;
obj.getInfo = function () {
    return "Mi nombre es " + this.nombre + " y tengo " + this.edad
}

console.log(obj);

let objJson = {
    nombre: "Peter",
    edad: 41,
    direccion: {
        calle: "Calle perdida",
        numero: 15
    },
    getInfo () { // Método
        return "Mi nombre es " + this.nombre + " y tengo " + this.edad
    }
};

console.log(objJson);

console.log(obj.getInfo());
console.log(objJson.getInfo());

let obj2 = {
    tel1: "934593459",
    tel2: "435948594",
    tel3: "439875498",
    "*otra propiedad": "Hola",
    1: "33"
};

console.log(obj2);
console.log(obj2.tel1);
console.log(obj2[1]);
console.log(obj2["*otra propiedad"]);

[1,2,3].forEach(i => console.log(obj2["tel"+i]));
