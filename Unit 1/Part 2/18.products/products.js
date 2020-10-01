"use strict";

let imagePreview = null;
let productForm = null;
let tableProducts = null;

function convertBase64(file) {
    let reader = new FileReader();

    if (file) { // File has been selected (convert to Base64)
        reader.readAsDataURL(file);
    }

    reader.addEventListener("load", () => { //Converted into Base64 event (async)
        imagePreview.src = reader.result;
    });
}

function addProduct(e) {
    e.preventDefault();
    let name = productForm.name.value;
    let desc = productForm.description.value;
    let photo = imagePreview.src;

    let tr = document.createElement("tr");
    let tdPhoto = document.createElement("td");
    let img = document.createElement("img");
    img.src = photo;
    tdPhoto.appendChild(img);
    tr.appendChild(tdPhoto);

    let tdName = document.createElement("td");
    tdName.innerText = name;
    tr.appendChild(tdName);

    let tdDesc = document.createElement("td");
    tdDesc.innerText = desc;
    tr.appendChild(tdDesc);

    let tdDelete = document.createElement("td");
    let btnDelete = document.createElement("button");
    btnDelete.classList.add("delete");
    btnDelete.innerText = "Delete";
    btnDelete.addEventListener("click", e => tr.remove());
    tdDelete.appendChild(btnDelete);
    tr.appendChild(tdDelete);

    tableProducts.querySelector("tbody").appendChild(tr);
    productForm.reset();
    imagePreview.src = "";
}

document.addEventListener("DOMContentLoaded", e => {
    imagePreview = document.getElementById("imagePreview");
    productForm = document.getElementById("addProduct");
    tableProducts = document.getElementById("products");

    productForm.photo.addEventListener("change", e => {
        convertBase64(productForm.photo.files[0]);
    });

    productForm.addEventListener("submit", addProduct);
});
