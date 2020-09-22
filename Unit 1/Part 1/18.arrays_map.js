let words = ["car", "house", "anonymous", "mouse", "garden", "apple"];
let lengths = words.map(w => w.length);

console.log(words.toString());
console.log(lengths.toString());

let reverse = words.map(w => {
    let wArray = Array.from(w);
    wArray.reverse();
    return wArray.join("");
});
console.log(reverse.toString());
console.log(words.toString());

let wordsStartA = words.filter(w => w.startsWith("a"));
console.log(wordsStartA.toString());
