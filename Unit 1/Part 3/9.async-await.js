function addAsync(n1, n2, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof n1 != "number" || typeof n2 != "number") {
                reject("Both parameters must be number")
            } else {
                resolve(n1 + n2);
            }
        }, time);
    });
}

async function getSuma() {
    let res = await addAsync(3, 5, 2000);
    console.log(res);
}

document.addEventListener("DOMContentLoaded", e => {
    getSuma();

    document.addEventListener("click", e => console.log("click"));
});
