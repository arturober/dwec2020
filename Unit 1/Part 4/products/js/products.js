import {Product} from './product.class';

let imagePreview = null;
let productForm = null;
let tableProducts = null;

function convertBase64(file) {
    let reader = new FileReader();

    if (file) { // File has been selected (convert to Base64)
        reader.readAsDataURL(file);
    }

    reader.addEventListener('load', () => { //Converted into Base64 event (async)
        imagePreview.src = reader.result;
    });
}

async function addProduct(e) {
    e.preventDefault();
    let prod = new Product({
        name: productForm.name.value,
        description: productForm.description.value,
        photo: imagePreview.src
    });

    try {
        prod = await prod.post();
        appendProductHTML(prod);    

        productForm.reset();
        imagePreview.src = '';
    } catch (e) {
        console.error(e);
    }
}

function appendProductHTML(prod) {
    let tr = prod.toHtml();
    tableProducts.querySelector('tbody').appendChild(tr);
}

async function getProducts() {
    try{
        let products = await Product.getAllProducts();
        products.forEach(p => appendProductHTML(p));
    } catch(e) {
        console.error('Error loading products: ' + e);
    }
}

document.addEventListener('DOMContentLoaded', e => {
    imagePreview = document.getElementById('imagePreview');
    productForm = document.getElementById('addProduct');
    tableProducts = document.getElementById('products');

    getProducts();

    productForm.photo.addEventListener('change', e => {
        convertBase64(productForm.photo.files[0]);
    });

    productForm.addEventListener('submit', addProduct);
});
