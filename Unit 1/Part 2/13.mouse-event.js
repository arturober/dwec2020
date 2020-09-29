'use strict';

document.addEventListener('DOMContentLoaded', e => {
    let div = document.getElementById("div1");
    div.addEventListener('mouseenter', e => {
        // div.style.backgroundColor = "red";
        console.log("Mouse has entered the div");
    });
    div.addEventListener('mouseleave', e => {
        // div.style.backgroundColor = "blue";
        console.log("Mouse has left the div");
    });
    div.addEventListener('mousemove', e => {
        div.innerText = `${e.offsetX}, ${e.offsetY}`;
        div.style.backgroundColor = `rgb(255, ${e.offsetX}, ${e.offsetY})`;
    });
});
