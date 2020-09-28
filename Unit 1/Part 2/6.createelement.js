let ul = document.createElement("ul");

let li1 = document.createElement("li");
li1.innerText = "Element 1";
li1.classList.add("c1");
li1.title = "Element 1";

let li2 = document.createElement("li");
li2.innerText = "Element 2";

let li3 = document.createElement("li");
li3.innerText = "Element 3";

// [li1, li2, li3].forEach(li => ul.appendChild(li));
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

document.body.appendChild(ul);

