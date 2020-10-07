"use strict";

function addAsync(n1, n2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof n1 != "number" || typeof n2 != "number") {
                reject("Both parameters must be number")
            } else {
                resolve(n1 + n2);
            }
        }, 2000);
    });
}

addAsync("hola", 4)
    .catch(error => {
        console.error(error)
        return 0;
    }) // 9
    .then(res => {
        console.log(res);
        return addAsync(res, 10);
    })
    .then(res => console.log(`Resultado + 10: ${res}`));



