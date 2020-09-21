let num = 8/3;
console.log(num.toFixed(2));

let str = "hello";
console.log(str.toLocaleUpperCase());

let age = Number(prompt("Tell me your age: "));
console.log(age);
if(Number.isNaN(age)) {
    console.error("Your age must be a number!");
}
