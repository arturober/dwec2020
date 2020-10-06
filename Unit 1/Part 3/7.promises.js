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

let promise = addAsync(2, 4);
promise.then(res => {
    console.log(res);
}).catch(error => console.error(error)); // 9


