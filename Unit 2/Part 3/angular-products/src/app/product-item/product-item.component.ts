import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Input() showImage!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  changeRating(rating: number): void {
    this.product.rating = rating;
  }

}
