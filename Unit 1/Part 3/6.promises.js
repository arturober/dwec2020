"use strict";

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Timeout finished")
        resolve();
    },2000);
});

promise.then(() => console.log("Promise finished!"));
