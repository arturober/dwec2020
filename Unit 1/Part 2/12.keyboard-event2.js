'use strict';

let up = 40;
let left = 20;

document.addEventListener('DOMContentLoaded', e => {
    let input = document.getElementById("input1");
    input.addEventListener('keydown', e => {
        e.preventDefault();
        switch (e.key) {
            case "ArrowRight":
                input.style.left = (left+=2) + "px";
                break;
            case "ArrowLeft":
                input.style.left = (left-=2) + "px";
                break;
            case "ArrowUp":
                input.style.top = (up-=2) + "px";
                break;
            case "ArrowDown":
                input.style.top = (up+=2) + "px";
                break;
        }
    });
});
