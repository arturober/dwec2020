let a = [2, 14, 7, 18, 9, 6, 9, 12, 10, 9, 4, 7];
let item = 9;

function timesArray(array, item) {
    let pos = 0;
    let times = 0;
    while((pos = array.indexOf(item, pos)) !== -1) {
        times++;
        pos++;
    }
    return times;
}

let times = timesArray(a, item);
console.log(`${item} is found ${times} times`);

let times2 = a.filter(n => n === item).length;
console.log(`${item} is found ${times2} times`);

console.log(a.includes(14)); // true
console.log(a.includes(54)); // false
