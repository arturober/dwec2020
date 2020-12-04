import { AfterContentInit, AfterViewInit, Component, ContentChild, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/guards/page-leave.guard';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements CanComponentDeactivate, OnInit {
  newProduct!: Product;
  imageFile = '';
  productAdded = false;

  constructor(
    private title: Title,
    private router: Router,
    private productsService: ProductsService
  ) { }

  canDeactivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.productAdded || confirm('Are you sure you want to leave?. Changes will be lost...');
  }

  ngOnInit(): void {
    this.title.setTitle('Angular Products | New product');
    this.resetProduct()
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
    this.productsService.addProduct(this.newProduct).subscribe(
      product => {
        this.productAdded = true;
        this.router.navigate(['/products']);
      },
      error => console.error(error)
    );
  }

  resetProduct(): void {
    this.newProduct = {
      description: '',
      available: '',
      imageUrl: '',
      price: 0,
      rating: 3
    };
    this.imageFile = '';
  }
}
