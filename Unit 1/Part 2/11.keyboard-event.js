'use strict';

let input;
let input2;

function detectKey(e) {
    e.preventDefault();
    input.value += e.key + "(🍔)";    
}

function copyText(e) {
    console.log(`Texto copiado: ${document.getSelection()}`);
}

document.addEventListener('DOMContentLoaded', e => {
    input = document.getElementById("input1");
    input2 = document.getElementById("input2");
    input.addEventListener('keypress', detectKey);
    input2.addEventListener('copy', copyText);
    input2.addEventListener('cut', copyText);
    input2.addEventListener('paste', e => {
        console.log(`Texto pegado: ${e.clipboardData.getData('text')}`);
    });
});