let a = ["apple", "pear", "watermelon", "peach", "lemon", "banana"];

a.sort();
console.log(a.join(", "));

a.sort((w1, w2) => w1.length - w2.length);
console.log(a.join(", "));

a.sort((w1, w2) => w1[w1.length - 1].localeCompare(w2[w2.length - 1]));
console.log(a.join(", "));

let nums = [2, 5, 15, 27, 293, 8, 41, 111];
nums.sort((n1, n2) => n1 - n2);
console.log(nums.join(", "));

