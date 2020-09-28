'use strict';

let p = null;

function detectResize(e) {
    p.innerText = `${window.innerWidth} x ${window.innerHeight}`;
}

document.addEventListener('DOMContentLoaded', e => {
    p = document.getElementById("p1");
    window.addEventListener('resize', detectResize);
});