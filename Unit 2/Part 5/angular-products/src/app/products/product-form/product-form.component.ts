import { AfterContentInit, AfterViewInit, Component, ContentChild, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, UrlTree } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, from, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { CanComponentDeactivate } from 'src/app/guards/page-leave.guard';
import { ConfirmModalComponent } from 'src/app/modals/confirm-modal/confirm-modal.component';
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
  @ViewChild('productForm') productForm!: NgForm;

  constructor(
    private title: Title,
    private router: Router,
    private productsService: ProductsService,
    private modalService: NgbModal
  ) { }

  canDeactivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.productAdded || this.productForm.pristine) { return true; }

    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.title = 'Changes not saved';
    modalRef.componentInstance.body = 'Do you want to save changes?';

    return from(modalRef.result.catch(e => false)).pipe(
      switchMap(ok => {
        if(ok) {
          return this.productsService.addProduct(this.newProduct).pipe(
            map(prod => true),
            catchError(error => {
              console.error(error); // Mostrar errores al usuario
              return of(false);
            })
          );
        } else {
          return of(true);
        }
      })
    );
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
