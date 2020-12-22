import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: Product;

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Angular Products | Product detail');
    this.route.data.subscribe(
      data => this.product = data.product
    );
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

  goBack(): void {
    this.router.navigate(['/products']);
  }
}
