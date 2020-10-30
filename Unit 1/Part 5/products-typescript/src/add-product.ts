import {Product} from './classes/product.class';
import '../products.css';

let imagePreview: HTMLImageElement = null;
let productForm: HTMLFormElement = null;

function convertBase64(file: File): void {
    const reader = new FileReader();

    if (file) { // File has been selected (convert to Base64)
        reader.readAsDataURL(file);
    }

    reader.addEventListener('load', () => { //Converted into Base64 event (async)
        imagePreview.src = reader.result as string;
    });
}

async function addProduct(e: Event): Promise<void> {
    e.preventDefault();
    const prod = new Product({
        name: (productForm.name as any).value,
        description: (productForm.description as HTMLInputElement).value,
        photo: imagePreview.src
    });

    try {
        await prod.post();
        location.assign('index.html');
    } catch (e) {
        console.error(e);
    }
}

document.addEventListener('DOMContentLoaded', e => {
    imagePreview = document.getElementById('imagePreview') as HTMLImageElement;
    productForm = document.getElementById('addProduct') as HTMLFormElement;

    productForm.photo.addEventListener('change', (e: Event) => {
        convertBase64(productForm.photo.files[0]);
    });

    productForm.addEventListener('submit', addProduct);
});
