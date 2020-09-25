let rectangle = [3, 5]; // [width, height]

function getArea([width = 1, height = 1]) {
    return width * height;
}
console.log(getArea(rectangle));
console.log(getArea([]));
