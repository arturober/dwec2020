console.log(document.body.children);
let div1 = document.body.firstElementChild;
console.log(div1.children);
console.log(div1.childNodes);
// let div2 = div1.nextElementSibling;
let div2 = document.body.children[1];
console.log(div2);

console.log(div2.nextElementSibling);
let element = div2.children[3];
// let element = div2.nextElementSibling.nextElementSibling;

if(!element) {
    console.error("The element doesn't exist");
}


