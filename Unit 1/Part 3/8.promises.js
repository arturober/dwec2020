"use strict";

let data = 10;

function getData() {
    if(!data) {
        //return Request to the server to get data (Promise)
    } else {
        return Promise.resolve(data);
    }
}

getData().then(data => console.log(data));

function addAsync(n1, n2, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof n1 != "number" || typeof n2 != "number") {
                reject("Both parameters must be number")
            } else {
                resolve(n1 + n2);
            }
        }, time);
    });
}

Promise.race([
    addAsync(3, 5, 1000),
    addAsync(1, 1, 1500),
    addAsync(2, 2, 2000),
    addAsync(9, 9, 700)
]).then(res => {
    console.log(res);
}).catch(e => console.error(e));


