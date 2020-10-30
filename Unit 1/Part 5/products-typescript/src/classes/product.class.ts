import { IProduct } from '../interfaces/iproduct';
import {SERVER} from '../constants';
import {Http} from './http.class';
import { ProductResponse, ProductsResponse } from '../interfaces/responses';
const productTemplate: (prod: IProduct) => string = require('../../templates/product.handlebars');

export class Product implements IProduct {
    id?: number;
    name: string;
    description: string;
    photo: string;
    
    constructor(prodJson: IProduct) { // Receives JSON object
        Object.assign(this, prodJson);
    }

    static async getAllProducts(): Promise<Product[]> {
        const data = await Http.get<ProductsResponse>(`${SERVER}/products`);
        return data.products.map(pJson => new Product(pJson));
    }

    async post(): Promise<Product> {
        const data = await Http.post<ProductResponse>(`${SERVER}/products`, this);
        return new Product(data.product);
    }

    async delete(): Promise<void> {
        await Http.delete<void>(`${SERVER}/products/${this.id}`);
    }

    toHtml(): HTMLTableRowElement {
        const tr = document.createElement('tr');

        const prodHtml = productTemplate({
            ...this, 
            photo: SERVER + '/' + this.photo
        });
        tr.innerHTML = prodHtml;
        
        const btnDelete = tr.querySelector('button.delete');
        btnDelete.addEventListener('click', async e => {
            await this.delete();
            tr.remove();
        });
        
        return tr;
    }
}