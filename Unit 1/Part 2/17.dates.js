'use strict';

let DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let now = new Date();
let hoursAgo20 = new Date(now);
hoursAgo20.setHours(hoursAgo20.getHours() - 20);

console.log(now);
console.log(hoursAgo20);

let past = new Date("2019-04-08");
console.log(past);

let day = now.getDate().toString().padStart(2, "0");
let month = (now.getMonth()+1).toString().padStart(2, "0");
console.log(`${day}/${month}/${now.getFullYear()}`);

console.log(`${DAYS[now.getDay()]}, ${now.getDate()} ${MONTHS[now.getMonth()]} ${now.getFullYear()}`);
