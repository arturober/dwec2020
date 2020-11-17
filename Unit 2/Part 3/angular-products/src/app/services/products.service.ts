import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../interfaces/product';
import { ProductsResponse } from '../interfaces/responses';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly URL = 'http://arturober.com:5001/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<ProductsResponse>(this.URL).pipe(
      map(resp => resp.products)
    );
  }
}
