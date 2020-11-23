import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailResolver implements Resolve<Product> {
  constructor(
    private router: Router,
    private productsService: ProductsService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Observable<never> {
    const id = +(route.paramMap.get('id') || 0);
    return this.productsService.getProduct(+id).pipe(
      catchError(error => {
        this.router.navigate(['/products']);
        return EMPTY;
      })
    );
  }
}
