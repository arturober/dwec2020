import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Input() showImage!: boolean;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  changeRating(rating: number): void {
    const oldRating = this.product.rating;
    this.product.rating = rating;
    this.productsService.changeRating(this.product.id as number, rating).subscribe({
      error: error => {
        this.product.rating = oldRating;
        console.error(error);
      }
    });
  }

}
