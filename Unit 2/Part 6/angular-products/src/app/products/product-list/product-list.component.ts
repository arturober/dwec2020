import { trigger, transition, style, animate, state, query, stagger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('productItem', [
      // transition(':enter', [
      //   style({ opacity: 0, transform: 'translateX(-100px)' }),
      //   animate('500ms ease-out', style({ opacity: 1, transform: 'none' }))
      // ]),
      state('selected', style({ borderLeft: '40px lightgreen solid' })),
      transition('* => selected', animate('200ms ease-in')),
      transition('selected => *', animate('200ms ease-out')),
    ]),
    trigger('productList', [
      transition(':enter', [
        query('product-item', [
          style({ opacity: 0, transform: 'translateX(-100px)' }),
          stagger(100,
            animate('500ms ease-out', style({ opacity: 1, transform: 'none'}))
          )
        ])
      ])
    ])
  ]
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

  toggleSelect(prod: Product) {
    prod.state = prod.state === 'selected' ? '' : 'selected';
  }

  addProduct(prod: Product): void {
    this.products.push(prod);
  }
}
