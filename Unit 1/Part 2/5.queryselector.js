// console.log(document.querySelector("#div1 a").title); // Prints "hello world"
// console.log(document.querySelector("#div1 > a").title); // ERROR: There's no immediate child inside #div1 which is a link <a>
// console.log(document.querySelector("#div1 > p > a").title); // Prints "hello world"
// console.log(document.querySelector(".normalLink[title^='bye']").title); // Prints "bye world"
// console.log(document.querySelector(".normalLink[title^='bye'] + a").title); // Prints "hello again"
// let elems = document.querySelectorAll(".normalLink");
// elems.forEach(elem => console.log(elem.title));// Prints "hello world" and "bye world"

// let elems2 = document.querySelectorAll("a[title^='hello']");
// elems2.forEach(elem => console.log(elem.title)); // Prints "hello world" and "hello again"

let elems3 = document.querySelectorAll("a[title='hello world'] ~ a");
elems3.forEach(elem => console.log(elem.title)); // Prints "bye world" and "hello again"
