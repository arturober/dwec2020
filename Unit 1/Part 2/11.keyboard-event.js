'use strict';

let input;

function detectKey(e) {
    e.preventDefault();
    input.value += e.key + "(🍔)";    
}

document.addEventListener('DOMContentLoaded', e => {
    input = document.getElementById("input1");
    input.addEventListener('keypress', detectKey);
});