import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Product list';
  headers = { image: 'Image', description: 'Product', price: 'Price', available: 'Available', rating: 'Rating' };
  showImages = true;
  search = '';
  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Angular Products | Product list');
    this.productsService.getProducts().subscribe(
      products => this.products = products,
      (error: string) => console.error(error)
    );
  }

  toggleImages(): void {
    this.showImages = !this.showImages;
  }

  addProduct(prod: Product): void {
    this.products.push(prod);
  }
}
