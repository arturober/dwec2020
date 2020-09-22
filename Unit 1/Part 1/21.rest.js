function sum(...nums) {
    return nums.reduce((total, n) => total + n, 0);
}

console.log(sum(2, 4));
console.log(sum(2, 4, 8, 12, 8, 10));
console.log(sum());