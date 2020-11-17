import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return [{
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
  }
}
