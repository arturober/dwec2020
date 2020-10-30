import {Product} from './classes/product.class';
import '../products.css';

let tableProducts: HTMLTableElement = null;

function appendProductHTML(prod: Product): void {
    const tr = prod.toHtml();
    tableProducts.querySelector('tbody').appendChild(tr);
}

async function getProducts(): Promise<void> {
    try{
        const products = await Product.getAllProducts();
        products.forEach(p => appendProductHTML(p));
    } catch(e) {
        console.error('Error loading products: ' + e);
    }
}

document.addEventListener('DOMContentLoaded', e => {
    tableProducts = document.getElementById('products') as HTMLTableElement;

    getProducts();
});
