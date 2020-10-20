import {SERVER} from './constants';
import {Http} from './http.class';

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
        let tdPhoto = document.createElement('td');
        let img = document.createElement('img');
        img.src = SERVER + '/' + this.photo;
        tdPhoto.appendChild(img);
        tr.appendChild(tdPhoto);

        let tdName = document.createElement('td');
        tdName.innerText = this.name;
        tr.appendChild(tdName);

        let tdDesc = document.createElement('td');
        tdDesc.innerText = this.description;
        tr.appendChild(tdDesc);

        let tdDelete = document.createElement('td');
        let btnDelete = document.createElement('button');
        btnDelete.classList.add('delete');
        btnDelete.innerText = 'Delete';
        btnDelete.addEventListener('click', async e => {
            await this.delete();
            tr.remove();
        });
        tdDelete.appendChild(btnDelete);
        tr.appendChild(tdDelete);

        return tr;
    }
}