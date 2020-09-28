'use strict';

document.addEventListener('DOMContentLoaded', e => {
    let div = document.getElementById("div1");

    div.addEventListener('click', e => {
        if(!div.style.backgroundColor) {
            div.style.backgroundColor = "red";
        } else {
            div.style.backgroundColor = "";
        }
    });

});
