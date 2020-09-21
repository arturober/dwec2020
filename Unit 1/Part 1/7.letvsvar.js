for(let i = 0; i < 10; i++) {
    let p = document.createElement("p");
    p.innerText = "Párrafo " + (i+1);
    p.addEventListener('click', e => {
        console.log("Click en el párrafo " + (i+1));
    });
    document.body.appendChild(p);
}

