'use strict';

document.addEventListener('DOMContentLoaded', e => {
    let div = document.getElementById("div1");

    div.addEventListener('click', e => {
        // if(div.classList.contains("selected")) {
        //     div.classList.remove("selected");
        // } else {
        //     div.classList.add("selected");
        // }
        div.classList.toggle("selected");
    });

    let input = document.getElementById("input1");
    // input.value = "Hello world";
    input.setAttribute("value", "Hello world!");
    input.dataset.idproduct = 24;
    console.log(input.dataset.idproduct);
});
