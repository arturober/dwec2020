import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Product list';
  headers = { image: 'Image', description: 'Product', price: 'Price', available: 'Available' };
  showImages = true;
  search = '';
  products: Product[] = [{
    id: 1,
    description: 'SSD hard drive',
    available: '2016-10-03',
    price: 75,
    imageUrl: 'assets/ssd.jpg',
    rating: 5
  }, {
    id: 2,
    description: 'LGA1151 Motherboard',
    available: '2016-09-15',
    price: 96.95,
    imageUrl: 'assets/motherboard.jpg',
    rating: 4
  }, {
    id: 3,
    description: 'DDR4 3200 8GB module',
    available: '2017-11-04',
    price: 65,
    imageUrl: 'assets/ram.jpg',
    rating: 5
  }, {
    id: 4,
    description: 'HDD Hard Drive 1TB',
    available: '2014-09-15',
    price: 40.95,
    imageUrl: 'assets/hdd.jpg',
    rating: 1
  }];

  newProduct!: Product;
  imageFile = '';

  constructor() { }

  ngOnInit(): void {
    this.resetProduct();
  }

  toggleImages(): void {
    this.showImages = !this.showImages;
  }

  loadImage(input: HTMLInputElement): void {
    if (!input.files) { return; }
    const file = input.files[0];
    const reader = new FileReader();

    if (file) { // File has been selected (convert to Base64)
      reader.readAsDataURL(file);
    }

    reader.addEventListener('load', () => { //Converted into Base64 event (async)
      this.newProduct.imageUrl = reader.result as string;
    });
  }

  addProduct(): void {
    this.products.push(this.newProduct);
    this.resetProduct();
  }

  resetProduct(): void {
    this.newProduct = {
      description: '',
      available: '',
      imageUrl: '',
      price: 0,
      rating: 0
    };
    this.imageFile = '';
  }
}
