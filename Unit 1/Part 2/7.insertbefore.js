let text = document.createTextNode("This text has been inserted after the links!");
let a2 = document.querySelector("p > a.c2");
let p = a2.parentElement;
p.insertBefore(text, a2);
let a3 = document.querySelector("a.c3");
if(a3) {
    a3.remove();
}

let aIes = document.createElement("a");
aIes.href = "https://iessanvicente.com";
aIes.innerText = "IES San Vicente";
p.replaceChild(aIes, a2);
