let a = [2, 14, 7, 18, 9, 6, 9, 12, 10, 9, 4, 7];

let max = a.reduce((max, num) => num > max ? num : max);
console.log(max);

let words = ["car", "house", "anonymous", "mouse", "garden", "apple"];
let str = words.reduce((str, w) => str + ", " + w);
console.log(str);

