import productTemplate from '../templates/product.handlebars';

export class Product {
    constructor({ name, description, photo }) { // Receives JSON object
        this.name = name;
        this.description = description;
        this.photo = photo;
    }

    static getAllProducts() {
        return products;
    }

    post() {
        products.push(this);
        localStorage.setItem('products', JSON.stringify(products));
        return this;
    }

    delete() {
        products = products.filter(p => p !== this);
        localStorage.setItem('products', JSON.stringify(products));
    }

    toHtml() {
        let tr = document.createElement('tr');

        let prodHtml = productTemplate(this);
        tr.innerHTML = prodHtml;
        
        let btnDelete = tr.querySelector('button.delete');
        btnDelete.addEventListener('click', e => {
            this.delete();
            tr.remove();
        });
        
        return tr;
    }
}

let products = JSON.parse(localStorage.getItem('products') || '[]');
products = products.map(p => new Product(p));
