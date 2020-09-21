
function multby2(array) {
    for(let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
}

let a = [1, 2, 3, 4];
multby2(a);
console.log(a.toString()); // 2, 4, 6, 8
