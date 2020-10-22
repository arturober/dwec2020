import {SERVER} from './constants';
import {Http} from './http.class';
import productTemplate from '../templates/product.handlebars';

export class Product {
    constructor({ id, name, description, photo }) { // Receives JSON object
        this.id = id;
        this.name = name;
        this.description = description;
        this.photo = photo;
    }

    static async getAllProducts() {
        let data = await Http.get(`${SERVER}/products`);
        return data.products.map(pJson => new Product(pJson));
    }

    async post() {
        let data = await Http.post(`${SERVER}/products`, this);
        return new Product(data.product);
    }

    async delete() {
        await Http.delete(`${SERVER}/products/${this.id}`);
    }

    toHtml() {
        let tr = document.createElement('tr');

        let prodHtml = productTemplate({
            ...this, 
            photo: SERVER + '/' + this.photo
        });
        tr.innerHTML = prodHtml;
        
        let btnDelete = tr.querySelector('button.delete');
        btnDelete.addEventListener('click', async e => {
            await this.delete();
            tr.remove();
        });
        
        return tr;
    }
}